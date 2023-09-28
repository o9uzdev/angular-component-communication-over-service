import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-read-user',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `
})
export class ReadUserComponent {
  users: string[];

  constructor(private userService: UserService) {
    this.users = this.userService.users;
  }

}
