import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { AppFooter } from './components/app-footer/app-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppFooter],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-todo');
}
