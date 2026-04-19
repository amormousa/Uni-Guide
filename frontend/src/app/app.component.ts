import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="padding: 2rem; text-align: center;">
      <h1 style="color: #1a6be0;">🎓 UniGuide</h1>
      <p>منصتك الذكية للجامعة</p>
      <router-outlet />
    </div>
  `,
  styles: []
})
export class AppComponent {}