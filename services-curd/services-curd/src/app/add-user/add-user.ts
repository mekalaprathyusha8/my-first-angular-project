import { Component, inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.html',
})
export class AddUser {
  userService: UserService = inject(UserService);
  user: UserModel = {
    userid:0,
    name: '',
    email: '',
    phone: ''
  }
  addUser(){
    this.userService.addUser(this.user)
    this.resetuser();
  }
  resetuser(){
    this.user = {
      userid:0,
      name: '',
      email: '',
      phone: ''
    }
  }
}

