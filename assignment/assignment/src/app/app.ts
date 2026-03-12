import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child';
import { User } from './models/student.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './app.html',
  styleUrl:'./app.css'
})
export class App {

  userid:number = 0
  name:string = ""
  email:string = ""
  phone:string = ""

  users:User[]=[]
  formType:string="add"
  errorName:string=""
  errorEmail:string=""
  errorPhone:string=""
  checkIsNameInvalid():boolean{
    this.name = this.name.trim()
    if(this.name==="") {
      this.errorName = "Name is required"
      return true
    }
    const namePattern=/^[a-zA-Z\s]+$/
    if(!namePattern.test(this.name)){
      this.errorName="Name should contain atleast 3 characters"
      return true
    }else{
      this.errorName=""
      return false
    }
  }

  checkIsEmailInvalid():boolean{
     this.email = this.email.trim()
    if(this.email==="") {
      this.errorEmail = "Email is required"
      return true
    }
    const emailPattern=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if(!emailPattern.test(this.email)){
      this.errorEmail="Invalid email"
      return true
    }else{
      this.errorEmail=""
    }
    return false
  }

  checkIsPhoneInvalid():boolean{
     this.phone = this.phone.trim()
    if(this.phone==="") {
      this.errorPhone = "Phone is required"
      return true
    }
    const phonePattern=/^[0-9]{10}$/

    if(!phonePattern.test(this.phone)){
      this.errorPhone="Phone must be 10 digits only"
      return true
    }else{
      this.errorPhone=""
    }
    return false
  }

  addUser(){
    if(this.userid === 0){
      const user:User={
        userid:this.users.length+1,
        name:this.name,
        email:this.email,
        phone:this.phone
      }
      this.users.push(user)
    }else{
      this.users = this.users.map(user=>{
        if(user.userid === this.userid){
          user.name = this.name
          user.email = this.email
          user.phone = this.phone
        }
        return user
      })

      this.formType="add"
    }
    this.userid=0
    this.name=""
    this.email=""
    this.phone=""
  }

  deleteUser(id:number){
    const filteredUser = this.users.filter(user=>user.userid!==id)
    this.users=filteredUser

  }

  editUser(id:number){
    const user=this.users.find(user=>user.userid===id)
    if(!user) return

    this.userid=user.userid
    this.name=user.name
    this.email=user.email
    this.phone=user.phone
    this.formType="edit"
  }

}
