import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<appheader></appheader>
<h3>This is the content area Hello {{name}}</h3>`,
})
export class AppComponent  { name = 'Angular'; }
