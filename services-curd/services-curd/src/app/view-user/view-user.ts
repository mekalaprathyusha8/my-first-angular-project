import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.html',
})
export class ViewUser {
  userService: UserService = inject(UserService);
  users:UserModel[] = []
  ngOnInit(){
    this.getUsers();
    console.log(this.users);
  }
  getUsers(){
    this.users = this.userService.getUsers();
  }
  deleteUser(userid: number){
    this.userService.deleteUser(userid);
    this.getUsers();
  }
}
