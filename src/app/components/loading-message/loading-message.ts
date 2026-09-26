import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-message',
  template: `<p class="message">Cargando...</p>`,
  styles: `.message { text-align: center; color: var(--muted); padding: 40px; }`
})
export class LoadingMessage {}