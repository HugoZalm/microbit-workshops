import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [MatButtonModule, MatToolbarModule, RouterLink, RouterOutlet],
  selector: 'app-root',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    .brand {
      color: inherit;
      font: var(--mat-sys-title-large);
      text-decoration: none;
    }
    .spacer {
      flex: 1;
    }
    main {
      box-sizing: border-box;
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 16px;
    }
  `,
  template: `
    <mat-toolbar role="banner">
      <a class="brand" routerLink="/">micro:bit Workshops</a>
      <span class="spacer"></span>
      <a matButton routerLink="/beheer">Beheer</a>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
})
export class App {}
