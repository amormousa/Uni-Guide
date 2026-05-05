import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // TODO: Implement state management (Signals/LocalStorage)
  // TODO: Implement setTheme(mode: ThemeMode)
  // TODO: Implement toggleTheme()
}