import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/peliculas" class="logo">Catalogo de peliculas</a>
    </nav>
  `,
  styles: `
    .navbar { padding: 16px 24px; background: var(--panel); border-bottom: 1px solid var(--border); }
    .logo { color: var(--accent); font-size: 22px; font-weight: bold; text-decoration: none; }
  `
})
export class Navbar {}