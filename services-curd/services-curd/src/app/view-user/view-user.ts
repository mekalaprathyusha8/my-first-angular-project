import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.html',
})
export class ViewUser {
  userService: UserService = inject(UserService);
  router:Router = inject(Router)
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
  editUser(userid: number){
    this.router.navigate(['/add-user', {userid}]);
  }
  
}
