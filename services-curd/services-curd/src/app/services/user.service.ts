import{ Injectable } from "@angular/core";    
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})              
export class UserService {
    users: UserModel[] = [] 
    addUser(user: UserModel){
      if (this.users.length === 0) {
        user.userid = 1;
      } else {
        user.userid =this.users[this.users.length - 1].userid + 1;
      }
      this.users.push(user);
    } 
    getUsers(){
      return this.users;
    } 
    deleteUser(userid: number){
      this.users = this.users.filter(user => user.userid!== userid);
    }
}