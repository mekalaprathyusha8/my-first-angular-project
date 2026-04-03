import { Component, inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.html',
})
export class AddUser {
  userService: UserService = inject(UserService);
  router:Router = inject(Router)
  route:ActivatedRoute= inject(ActivatedRoute);
  user: UserModel = {
    userid:0,
    name: '',
    email: '',
    phone: ''
  }
  title: string = 'Add New User';
  btnvalue: string = 'Add User';
  userid: number = 0;
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const userid = params.get('userid');
      this.userid = Number(userid);
      this.getuser();
    });
  }
  addUser(){
    if(this.btnvalue === 'Add User'){
      this.userService.addUser(this.user);
    } else {
      this.userService.editUser(this.userid, this.user);
    }
    this.resetuser();
    this.router.navigate(['/view-user']);
  }
  resetuser(){
    this.user = {
      userid:0,
      name: '',
      email: '',
      phone: ''
    }
  }
  getuser(){
    const user=this.userService.getUser(this.userid);
      if(user){
        this.user = user;
        this.title = 'Edit User';
        this.btnvalue = 'save User';
      }
      
  }
} 
