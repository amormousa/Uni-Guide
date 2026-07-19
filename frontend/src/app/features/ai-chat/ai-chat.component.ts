import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SseService } from './sse.service';
import { Subscription } from 'rxjs';

type ChatSender = 'user' | 'ai';

type ChatMessage = {
  id: string;
  text: string;
  sender: ChatSender;
};

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container_chat_bot">
      <!-- Chat Messages Area -->
      <div class="messages-container" #messagesContainer>
        <!-- Welcome Message / System Instruction -->
        <div class="message ai rtl">
          مرحباً بك في المساعد الذكي لجامعة FuturePath! 🎓 
          <br>
          يمكنني مساعدتك في معرفة الكليات والتخصصات المتاحة بالجامعات المصرية، الرسوم الدراسية، وروابط التقديم الرسمية. اسألني أي سؤال!
        </div>

        <div
          *ngFor="let msg of messages; trackBy: trackByMessageId"
          class="message"
          [ngClass]="[msg.sender, isArabicText(msg.text) ? 'rtl' : 'ltr']"
        >
          {{ msg.text }}
        </div>

        <!-- Current Streaming Token Indicator -->
        <div *ngIf="isSending && latestAiText" class="message ai" [ngClass]="isArabicText(latestAiText) ? 'rtl' : 'ltr'">
          {{ latestAiText }}<span class="cursor-blink">✦</span>
        </div>
      </div>

      <!-- Chat Form Options -->
      <form
        class="container-chat-options"
        (ngSubmit)="sendMessage()"
      >
        <div class="chat">
          <div class="chat-bot">
            <textarea
              id="chat_bot"
              name="chat_bot"
              [placeholder]="isArabicMode ? 'اسألني أي شيء... ✦˚' : 'Imagine Something...✦˚'"
              [(ngModel)]="userInput"
              rows="1"
              (input)="onTextareaInput()"
              (keydown.enter)="$event.preventDefault(); sendMessage()"
            ></textarea>
          </div>

          <div class="options">
            <div class="btns-add">
              <button type="button" aria-label="Clear History" (click)="clearHistory()" title="Clear Chat History">
                <i class="fas fa-trash-alt" style="color: rgba(255, 255, 255, 0.4); font-size: 1.1rem;"></i>
              </button>
              <button type="button" aria-label="Toggle Language Mode" (click)="toggleLanguageMode()" [title]="isArabicMode ? 'Switch to English' : 'تحويل للعربية'">
                <i class="fas fa-globe" style="color: rgba(255, 255, 255, 0.4); font-size: 1.1rem;"></i>
              </button>
            </div>

            <button class="btn-submit" type="submit" [disabled]="isSending || !userInput.trim()">
              <i>
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
        </div>
      </form>

      <!-- Suggested Question Tags -->
      <div class="tags">
        <span *ngFor="let tag of suggestedQuestions" (click)="askSuggestedQuestion(tag)">
          {{ tag }}
        </span>
      </div>
    </div>
  `,
  styles: [
    `
    .container_chat_bot {
      display: flex;
      flex-direction: column;
      max-width: 900px;
      padding-top: clamp(20px, 10vh, 120px);
      width: 100%;
      justify-content: center;
      margin: 0 auto;
      font-size: clamp(14px, 1.8vw, 18px);
    }

    .container_chat_bot .container-chat-options {
      position: relative;
      display: flex;
      background: linear-gradient(
        to bottom right,
        #4387f4,
        #363636,
        #363636,
        #363636,
        #363636
      );
      border-radius: 16px;
      padding: 4.5px;
      overflow: hidden;
    }

    .container_chat_bot .container-chat-options::after {
      position: absolute;
      content: "";
      top: -10px;
      left: -10px;
      background: radial-gradient(
        ellipse at center,
        #ffffff,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      );
      width: 30px;
      height: 30px;
      filter: blur(1px);
    }

    .container_chat_bot .container-chat-options .chat {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      width: 100%;
      overflow: hidden;
    }

    .container_chat_bot .container-chat-options .chat .chat-bot {
      position: relative;
      display: flex;
    }

    .container_chat_bot .chat .chat-bot textarea {
      background-color: transparent;
      border-radius: 16px;
      border: none;
      width: 100%;
      height: auto;
      color: #ffffff;
      font-family: sans-serif;
      font-size: 0.95rem;
      font-weight: 400;
      padding: clamp(12px, 1.6vh, 18px);
      resize: none;
      outline: none;
      min-height: 48px;
      max-height: 160px;
      overflow-y: auto;
    }

    .container_chat_bot .chat .chat-bot textarea::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    .container_chat_bot .chat .chat-bot textarea::-webkit-scrollbar-track {
      background: transparent;
    }

    .container_chat_bot .chat .chat-bot textarea::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    .container_chat_bot .chat .chat-bot textarea::-webkit-scrollbar-thumb:hover {
      background: #555;
      cursor: pointer;
    }

    .container_chat_bot .chat .chat-bot textarea::placeholder {
      color: #b0c4de;
      transition: all 0.3s ease;
    }
    .container_chat_bot .chat .chat-bot textarea:focus::placeholder {
      color: #363636;
    }

    .container_chat_bot .chat .options {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: clamp(8px, 1.6vh, 12px);
      gap: clamp(8px, 1.5vw, 12px);
      flex-wrap: wrap;
    }

    .container_chat_bot .chat .options .btns-add {
      display: flex;
      gap: clamp(6px, 1.2vw, 10px);
    }

    .container_chat_bot .chat .options .btns-add button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: clamp(36px, 4vw, 44px);
      height: clamp(36px, 4vw, 44px);
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.22s ease;
      border-radius: 50%;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        transform: translateY(-2px);
      }
    }

    .container_chat_bot .chat .options .btn-submit {
      display: flex;
      padding: 4px;
      background-image: linear-gradient(to top, #292929, #555555, #292929);
      border-radius: 10px;
      box-shadow: inset 0 6px 2px -4px rgba(255, 255, 255, 0.5);
      cursor: pointer;
      border: none;
      outline: none;
      transition: all 0.15s ease;
      color: #8b8b8b;
    }

    .container_chat_bot .chat .options .btn-submit:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .container_chat_bot .chat .options .btn-submit i {
      width: clamp(30px, 5vw, 36px);
      height: clamp(30px, 5vw, 36px);
      padding: clamp(4px, 1vw, 6px);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      backdrop-filter: blur(3px);
      color: inherit;
    }

    .container_chat_bot .chat .options .btn-submit svg {
      transition: all 0.3s ease;
      width: clamp(16px, 2.5vw, 22px);
      height: clamp(16px, 2.5vw, 22px);
    }

    .container_chat_bot .chat .options .btn-submit:hover:not(:disabled) svg {
      color: #4387f4;
      filter: drop-shadow(0 0 5px #4387f4);
    }

    .container_chat_bot .tags {
      padding: clamp(8px, 1.6vh, 14px) 0;
      display: flex;
      color: #ffffff;
      font-size: 0.85rem;
      gap: clamp(6px, 1.2vw, 10px);
      flex-wrap: wrap;
    }

    .container_chat_bot .tags span {
      padding: clamp(6px, 1vh, 10px) clamp(10px, 1.5vw, 16px);
      background-color: #1b1b1b;
      border: 1.5px solid #363636;
      border-radius: 10px;
      cursor: pointer;
      user-select: none;
      font-size: 0.9em;
      transition: all 0.25s;
      
      &:hover {
        background-color: rgba(67, 135, 244, 0.1);
        border-color: #4387f4;
        color: #4387f4;
      }
    }

    .messages-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 20px;
      height: 480px;
      overflow-y: auto;
      padding: 16px;
      will-change: scroll-position;
      scrollbar-gutter: stable;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.2);
    }

    .message {
      max-width: 80%;
      padding: clamp(12px, 1.6vh, 16px) clamp(14px, 2vw, 20px);
      border-radius: 16px;
      color: white;
      font-size: 0.98rem;
      line-height: 1.6;
      word-break: break-word;
      contain: content;
      white-space: pre-line;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }

    .message.user {
      align-self: flex-end;
      background: #4387f4;
      border-bottom-right-radius: 4px;
    }

    .message.ai {
      align-self: flex-start;
      background: #1b1b1b;
      border: 1px solid #363636;
      border-bottom-left-radius: 4px;
    }

    .message.rtl {
      direction: rtl;
      text-align: right;
      font-family: 'Outfit', 'Inter', sans-serif;
    }

    .message.ltr {
      direction: ltr;
      text-align: left;
    }

    .cursor-blink {
      display: inline-block;
      margin-left: 4px;
      animation: blink 0.8s infinite;
      color: #4387f4;
      font-weight: bold;
    }

    @keyframes blink {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiChatComponent implements OnInit, AfterViewInit, OnDestroy {
  private sse = inject(SseService);
  private cdr = inject(ChangeDetectorRef);

  messages: ChatMessage[] = [];
  userInput = '';
  latestAiText = '';
  isSending = false;
  isArabicMode = true;

  @ViewChild('messagesContainer', { static: true })
  messagesContainer!: ElementRef<HTMLElement>;

  private rafScrollId: number | null = null;
  private maxMessages = 200;
  private sseSub?: Subscription;

  // Bilingual suggested questions (Arabic-first)
  suggestedQuestionsAr = [
    'ما هي كليات جامعة الجلالة؟',
    'مصاريف الجامعة البريطانية',
    'كليات الحاسبات في مصر',
    'موقع جامعة المستقبل'
  ];

  suggestedQuestionsEn = [
    'Galala University faculties',
    'Tuition fees of British University',
    'Computer Science in Egypt',
    'Future University website'
  ];

  get suggestedQuestions(): string[] {
    return this.isArabicMode ? this.suggestedQuestionsAr : this.suggestedQuestionsEn;
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  ngAfterViewInit(): void {
    this.scrollToBottomRaf();
  }

  ngOnDestroy(): void {
    this.unsubscribeSse();
  }

  trackByMessageId(_: number, m: ChatMessage): string {
    return m.id;
  }

  onTextareaInput(): void {
    this.scrollToBottomRaf();
  }

  isArabicText(text: string): boolean {
    return /[\u0600-\u06FF]/.test(text);
  }

  toggleLanguageMode() {
    this.isArabicMode = !this.isArabicMode;
    this.cdr.markForCheck();
  }

  loadHistory() {
    try {
      const hist = localStorage.getItem('futurepath_chat_history');
      this.messages = hist ? JSON.parse(hist) : [];
      this.cdr.markForCheck();
    } catch (e) {
      this.messages = [];
    }
  }

  saveHistory() {
    try {
      localStorage.setItem('futurepath_chat_history', JSON.stringify(this.messages));
    } catch (e) {
      console.error('Failed to save chat history:', e);
    }
  }

  clearHistory() {
    this.messages = [];
    this.saveHistory();
    this.cdr.markForCheck();
    this.scrollToBottomRaf();
  }

  askSuggestedQuestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }

  sendMessage(): void {
    const text = this.userInput.trim();
    if (!text || this.isSending) return;

    this.isSending = true;
    this.latestAiText = '';

    const userMsg: ChatMessage = {
      id: this.newId(),
      text,
      sender: 'user',
    };

    this.messages = [...this.messages, userMsg];
    this.userInput = '';
    this.saveHistory();
    this.scrollToBottomRaf();
    this.cdr.markForCheck();

    // Prepare request parameters for the backend streaming SSE endpoint
    const favorites = localStorage.getItem('uni_favorites') || '[]';
    
    // Build context history (limit to last 6 messages to keep it lightweight)
    const contextHistory = this.messages.slice(-6).map(m => ({ sender: m.sender, text: m.text }));

    const queryParams = new URLSearchParams({
      message: text,
      favoritesJson: favorites,
      historyJson: JSON.stringify(contextHistory)
    });

    const url = `http://localhost:3000/api/ai/chat/stream?${queryParams.toString()}`;

    // Connect to the Server-Sent Events stream
    const aiId = this.newId();
    this.unsubscribeSse();

    this.sseSub = this.sse.getStream(url).subscribe({
      next: (token) => {
        this.latestAiText += token;
        this.cdr.markForCheck();
        this.scrollToBottomRaf();
      },
      error: (err) => {
        console.error('Error during chat stream:', err);
        this.finalizeAiResponse(aiId);
      },
      complete: () => {
        this.finalizeAiResponse(aiId);
      }
    });
  }

  private finalizeAiResponse(aiId: string) {
    const finalResponse = this.latestAiText || (this.isArabicMode 
      ? 'عذراً، حدث خطأ في الاتصال بالخادم.' 
      : 'Sorry, a connection error occurred with the server.');

    const aiMsg: ChatMessage = {
      id: aiId,
      text: finalResponse,
      sender: 'ai',
    };

    this.messages = [...this.messages, aiMsg];
    this.latestAiText = '';
    this.isSending = false;
    this.saveHistory();
    this.scrollToBottomRaf();
    this.cdr.markForCheck();
  }

  private unsubscribeSse() {
    if (this.sseSub) {
      this.sseSub.unsubscribe();
      this.sseSub = undefined;
    }
  }

  private scrollToBottomRaf(): void {
    if (this.rafScrollId != null) return;

    this.rafScrollId = requestAnimationFrame(() => {
      this.rafScrollId = null;
      const el = this.messagesContainer?.nativeElement;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
    });
  }

  private newId(): string {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }
}
