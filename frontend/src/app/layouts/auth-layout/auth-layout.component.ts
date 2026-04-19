import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<!-- TODO: Auth wrapper (centered card/background) -->
             <router-outlet />`,
  styles: []
})
export class AuthLayoutComponent {}