import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  template: `
    <input type="text" placeholder="name" #txtName>
    <button (click)="createUser(txtName.value)">create</button>
  `
})
export class CreateUserComponent {

  constructor(private userService: UserService) {

  }

  createUser(name: string) {
    this.userService.addUser(name);
  }
}
