import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-ai-chat",
  standalone: true,
  templateUrl: "./ai-chat.component.html",
  styleUrls: ["./ai-chat.component.scss"],
  imports: [CommonModule, FormsModule],
})
export class AiChatComponent implements AfterViewInit {
  messages: { text: string; sender: "user" | "ai" }[] = [];

  userInput: string = "";
  latestAiText: string = "";

  @ViewChild("messagesContainer") messagesContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // ensure the container is scrolled to bottom on init if there are messages
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;


    this.messages.push({
      text: this.userInput,
      sender: "user",
    });

    setTimeout(() => {
      const aiText = "Hello From AI✨";
      this.messages.push({
        text: aiText,
        sender: "ai",
      });
      this.latestAiText = aiText;
      
      setTimeout(() => this.scrollToBottom(), 10);
    }, 500);

    this.userInput = "";
    // scroll to bottom after user message added
    setTimeout(() => this.scrollToBottom(), 10);
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer && this.messagesContainer.nativeElement) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch (e) {
      // ignore when view not ready
    }
  }
}
