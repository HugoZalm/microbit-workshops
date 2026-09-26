import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-workshop',
  styles: ``,
  template: `
    <h1>Workshop</h1>
    <p>Workshop {{ id() }} komt hier.</p>
  `,
})
export class Workshop {
  /** Route parameter, bound via `withComponentInputBinding()`. */
  readonly id = input.required<string>();
}
