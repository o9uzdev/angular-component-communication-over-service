import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-create-user></app-create-user>
    <hr>
    <app-read-user></app-read-user>
  `
})
export class AppComponent {
  title = 'app';
}
