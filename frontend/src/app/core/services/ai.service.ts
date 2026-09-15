import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface ChatResponse {
  answer: string;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private http = inject(HttpClient);
  private chatUrl = `${environment.apiUrl}/chat`;

  sendMessage(prompt: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.chatUrl, { prompt });
  }
}
