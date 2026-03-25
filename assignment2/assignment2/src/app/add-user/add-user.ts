import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { User } from "../models/student.model";

@Component({
 selector:"app-add-user",
 standalone:true,
 imports:[CommonModule,FormsModule],
 templateUrl:"./add-user.html",
 styleUrls:["./add-user.css"]
})

export class AddUserComponent{

 @Output() addEvent = new EventEmitter<User>()
 @Output() updateEvent = new EventEmitter<User>()

 @Input() formType:string="add"

 @Input() set editUserData(user:User){
  if(!user) return
  this.userid=user.userid
  this.name=user.name
  this.email=user.email
  this.phone=user.phone
 }

 userid:number=0
 name:string=""
 email:string=""
 phone:string=""

 errorName:string=""
 errorEmail:string=""
 errorPhone:string=""

 checkName():boolean{

  this.name=this.name.trim()

  if(this.name===""){
   this.errorName="Name is required"
   return true
  }

  const pattern=/^[a-zA-Z\s]+$/

  if(!pattern.test(this.name)){
   this.errorName="Name must contain at least 3 characters"
   return true
  }

  this.errorName=""
  return false
 }

 checkEmail():boolean{

  this.email=this.email.trim()

  if(this.email===""){
   this.errorEmail="Email is required"
   return true
  }

  const pattern=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  if(!pattern.test(this.email)){
   this.errorEmail="Invalid email format"
   return true
  }

  this.errorEmail=""
  return false
 }

 checkPhone():boolean{

  this.phone=this.phone.trim()

  if(this.phone===""){
   this.errorPhone="Phone number is required"
   return true
  }

  const pattern=/^[0-9]{10}$/

  if(!pattern.test(this.phone)){
   this.errorPhone="Phone must be exactly 10 digits"
   return true
  }

  this.errorPhone=""
  return false
 }

 submitForm(){
  const nameInvalid = this.checkName()
  const emailInvalid = this.checkEmail()
  const phoneInvalid = this.checkPhone()

  if(nameInvalid || emailInvalid || phoneInvalid){
   return 
  }

  const user:User={
   userid:this.userid,
   name:this.name,
   email:this.email,
   phone:this.phone
  }

  if(this.formType==="add"){
   this.addEvent.emit(user)
  }else{
   this.updateEvent.emit(user)
  }

  
  this.userid=0
  this.name=""
  this.email=""
  this.phone=""


  this.errorName=""
  this.errorEmail=""
  this.errorPhone=""
 }
}

