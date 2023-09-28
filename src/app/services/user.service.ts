import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private names: string[] = [];

  get users(): string[] {
    return this.names;
  }

  addUser(name: string) {
    this.names.push(name);
  }
}
