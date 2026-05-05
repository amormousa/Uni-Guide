import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DirService {
  private document = inject(DOCUMENT);

  getCurrentDir(): 'rtl' | 'ltr' {

    return 'rtl';
  }

  setDir(dir: 'rtl' | 'ltr'): void {

    this.document.documentElement.dir = dir;
  }
}