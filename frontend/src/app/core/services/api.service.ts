import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = '/api'; 

  get<T>(path: string, params?: Record<string, string>): Observable<T> {

    return new Observable<T>();
  }

  post<T>(path: string, body: unknown): Observable<T> {

    return new Observable<T>();
  }
}