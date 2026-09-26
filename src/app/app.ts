import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <main><router-outlet /></main>
  `,
  styles: `
    main { max-width: 1200px; margin: 0 auto; padding: 24px; }
    footer { text-align: center; color: var(--muted); font-size: 12px; padding: 24px; }
  `
})
export class App {}