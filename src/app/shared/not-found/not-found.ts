import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-not-found',
  styles: ``,
  template: `
    <h1>Pagina niet gevonden</h1>
    <p>Deze pagina bestaat niet (meer).</p>
    <a matButton="filled" routerLink="/">Naar de startpagina</a>
  `,
})
export class NotFound {}
