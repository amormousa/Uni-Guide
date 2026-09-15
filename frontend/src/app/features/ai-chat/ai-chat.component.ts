import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
      <div class="ai-result" *ngIf="latestAiText">
        {{ latestAiText }}
      </div>

      <div class="messages-container" #messagesContainer>
        <div
          *ngFor="let msg of messages; trackBy: trackByMessageId"
          class="message"
          [ngClass]="msg.sender"
        >
          {{ msg.text }}
        </div>
      </div>

      <form
        class="container-chat-options"
        (ngSubmit)="sendMessage()"
      >
        <div class="chat">
          <div class="chat-bot">
            <textarea
              id="chat_bot"
              name="chat_bot"
              placeholder="Imagine Something...✦˚"
              [(ngModel)]="userInput"
              rows="1"
              (input)="onTextareaInput()"
            ></textarea>
          </div>

          <div class="options">
            <div class="btns-add">
              <button type="button" aria-label="Option 1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                  ></path>
                </svg>
              </button>
              <button type="button" aria-label="Option 2">
                <svg
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                </svg>
              </button>
              <button type="button" aria-label="Option 3">
                <svg
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>

            <button class="btn-submit" type="submit" [disabled]="isSending">
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

      <div class="tags">
        <span>Create An Image</span>
        <span>Analyse Data</span>
        <span>More</span>
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

    .ai-result {
      position: sticky;
      top: 0;
      background: rgba(27,27,27,0.9);
      color: #fff;
      padding: clamp(6px, 1.2vh, 12px) clamp(10px, 2vw, 16px);
      font-size: 1rem;
      border-bottom: 1px solid #363636;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      z-index: 5;
    }

    .container_chat_bot .container-chat-options {
      position: relative;
      display: flex;
      background: linear-gradient(
        to bottom right,
        #7e7e7e,
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
      background-color: rgba(0, 0, 0, 0.5);
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
      padding: clamp(8px, 1.4vh, 12px);
      resize: none;
      outline: none;
      min-height: 40px;
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
      color: #f3f6fd;
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
      color: rgba(255, 255, 255, 0.12);
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.22s ease;
    }

    .container_chat_bot .chat .options .btns-add button:hover {
      transform: translateY(-4px);
      color: #ffffff;
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
      opacity: 0.6;
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
      color: #f3f6fd;
      filter: drop-shadow(0 0 5px #ffffff);
    }

    .container_chat_bot .chat .options .btn-submit:focus:not(:disabled) svg {
      color: #f3f6fd;
      filter: drop-shadow(0 0 5px #ffffff);
      transform: scale(1.12) rotate(45deg) translateX(-2px) translateY(1px);
    }

    .container_chat_bot .chat .options .btn-submit:active:not(:disabled) {
      transform: scale(0.96);
    }

    .container_chat_bot .tags {
      padding: clamp(8px, 1.6vh, 14px) 0;
      display: flex;
      color: #ffffff;
      font-size: 0.85rem;
      gap: clamp(6px, 1.2vw, 10px);
    }

    .container_chat_bot .tags span {
      padding: clamp(4px, 0.8vh, 8px) clamp(6px, 1.2vw, 12px);
      background-color: #1b1b1b;
      border: 1.5px solid #363636;
      border-radius: 10px;
      cursor: pointer;
      user-select: none;
      font-size: 0.9em;
    }

    .messages-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
      max-height: 500px;
      overflow-y: auto;
      padding-top: 42px;
      will-change: scroll-position;
      scrollbar-gutter: stable;
    }

    .message {
      max-width: 75%;
      padding: clamp(10px, 1.6vh, 14px) clamp(12px, 2vw, 18px);
      border-radius: 14px;
      color: white;
      font-size: 1rem;
      line-height: 1.4;
      word-break: break-word;
      contain: content;
    }

    .message.user {
      align-self: flex-end;
      background: #4a4a4a;
    }

    .message.ai {
      align-self: flex-start;
      background: #1b1b1b;
      border: 1px solid #363636;
    }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiChatComponent implements AfterViewInit {
  messages: ChatMessage[] = [];
  userInput = '';
  latestAiText = '';
  isSending = false;

  @ViewChild('messagesContainer', { static: true })
  messagesContainer!: ElementRef<HTMLElement>;

  private rafScrollId: number | null = null;
  private maxMessages = 200;

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.scrollToBottomRaf();
  }

  trackByMessageId(_: number, m: ChatMessage): string {
    return m.id;
  }

  onTextareaInput(): void {
    // Minor UX: keep scroll performance high by only scrolling after input changes settle.
    this.scrollToBottomRaf();
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
    this.scrollToBottomRaf();

    // Demo/mock AI (replace with your SSE service later if needed)
    const fullAiText = 'Hello From AI✨';
    const aiId = this.newId();

    this.messages = [
      ...this.messages,
      { id: aiId, text: '', sender: 'ai' },
    ];

    const tokens = this.tokenize(fullAiText);
    let i = 0;
    const start = performance.now();

    const tick = () => {
      const elapsed = performance.now() - start;
      // Adaptive rate: fewer UI updates on slower devices.
      const msPerToken = Math.max(18, 70 - elapsed / 25);

      i = Math.min(tokens.length, i + Math.max(1, Math.floor(msPerToken / 18)));
      const nextText = tokens.slice(0, i).join('');

      this.latestAiText = nextText;
      this.messages = this.messages.map((m) =>
        m.id === aiId ? { ...m, text: nextText } : m
      );

      if (i < tokens.length) {
        // Run timers outside Angular to reduce change detection churn
        this.zone.runOutsideAngular(() => {
          setTimeout(() => this.zone.run(tick), msPerToken);
        });
      } else {
        this.isSending = false;
        this.scrollToBottomRaf();
      }

      this.trimMessages();
    };

    this.zone.runOutsideAngular(() => setTimeout(() => this.zone.run(tick), 200));
  }

  private trimMessages(): void {
    if (this.messages.length <= this.maxMessages) return;
    this.messages = this.messages.slice(this.messages.length - this.maxMessages);
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

  private tokenize(s: string): string[] {
    // Simple tokenization for smooth streaming.
    // Splitting by characters preserves emoji and punctuation reasonably.
    return Array.from(s);
  }

  private newId(): string {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }
}

