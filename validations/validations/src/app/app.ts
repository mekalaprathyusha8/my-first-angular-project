import { Component, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.Emulated,
  imports: [FormsModule, CommonModule],
  

})
export class App {
  // protected readonly title = signal('validations');
  userId: number = 0
  name: string = ''
  email: string = ''
  phone: string = ''
  gender: string = ''
  Java: boolean = false
  Python: boolean = false
  department: string = ''
  address: string = ''
  users: User[] = []
  formType : string ='add'
  errorName: string = ''
  errorEmail: string = ''
  errorPhone: string = ''
  errorGender: string = ''
  errorCourse: string = ''
  errorDepartment: string = ''
  errorAddress: string = ''
  addUser(){
    const isNameInValid = this.checkIsNameInValid()
    const isEmailInValid = this.checkIsEmailInValid()
    const isPhoneInValid = this.checkIsPhoneInValid()
    const isGenderInValid = this.checkIsGenderInValid()
    const isCourseInValid = this.checkIsCourseInValid()
    const isDepartmentInValid = this.checkIsDepartmentInValid()
    const isAddressInValid = this.checkIsAddressInValid()
    if( isNameInValid || isEmailInValid || isPhoneInValid || isGenderInValid || isCourseInValid || isDepartmentInValid || isAddressInValid)
      return
    // if(!this.checkIsEmailInValid())
    //   return
    // if(!this.checkIsPhoneInValid())
    //   return
    if(this.userId===0) {
      // if(this.name==="" || this.email==="" || this.phone==="") {
      //   this.errorName = this.name === "" ? "Name is required" : "";
      //   this.errorEmail = this.email === "" ? "Email is required" : "";
      //   this.errorPhone = this.phone === "" ? "Phone is required" : "";
      //   return;
      // }
      const userId = this.users.length + 1
      const courses: string[] = []
      if(this.Java) courses.push('Java')
      if(this.Python) courses.push('Python')
      const user: User = { userId: userId, name: this.name, email: this.email, phone: this.phone, gender: this.gender, courses: courses, department: this.department, address: this.address }
      this.users.push(user)
    }else{
      const modifiedUsers = this.users.map(user=>{
        if(user.userId!=this.userId) return user
        user.name = this.name
        user.email = this.email
        user.phone = this.phone
        user.gender = this.gender
        user.courses = []
        if(this.Java) user.courses.push('Java')
        if(this.Python) user.courses.push('Python')
        user.department = this.department
        user.address = this.address
        return user
      })
      this.users = modifiedUsers
      this.formType = 'add'
    }
    this.userId = 0
    this.name = ''
    this.email = ''
    this.phone = ''
    this .gender = ''
    this.Java = false
    this.Python = false
    this.department = ''
    this.address = ''
    this.errorName = ''
    this.errorEmail = ''
    this.errorPhone = ''
    this.errorGender = ''
    this.errorCourse = ''
    this.errorDepartment = ''
    this.errorAddress = ''
  }
  deleteUser(userId: number){
    const filteredUser = this.users.filter(user=>user.userId!=userId)
    this.users = filteredUser
  }
  editUser(userId: number){
    const user = this.users.find(user=> user.userId === userId)
    if(!user) return 
    this.userId = user.userId
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.gender = user.gender
    this.Java = user.courses.includes('Java')
    this.Python = user.courses.includes('Python')
    this.department = user.department
    this.address = user.address 
    this.formType = 'edit'
  }
  checkIsNameInValid():boolean{
    this.name = this.name.trim()
    if(this.name==="") {
      this.errorName = "Name is required"
      return true
    }
    const pattern = /^[A-Za-z ]+$/
    if(!pattern.test(this.name)) {
      this.errorName = "Name should only contain letters and spaces"
      return true
    }
    this.errorName = ''
    return false
  }
  checkIsEmailInValid():boolean{
    this.email = this.email.trim()
    if(this.email==="") {
      this.errorEmail = "Email is required"
      return true
    }
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if(!pattern.test(this.email)) {
      this.errorEmail = "Please enter a valid email address"
      return true
    }
    if(this.formType === 'add') {
      const isDuplicate = this.users.some(user=> user.email === this.email)
      if(isDuplicate) {
        this.errorEmail = "Email already exists"
        return true
      }
    }
    if(this.formType === 'edit') {
      const isDuplicate = this.users.some(user=> user.email === this.email && user.userId != this.userId)
      if(isDuplicate) {
        this.errorEmail = "Email already exists"
        return true
      }
    }
    this.errorEmail = ''
    return false
  }
  checkIsPhoneInValid():boolean{
    this.phone = this.phone.trim()
    if(this.phone==="") {
      this.errorPhone = "Phone is required"
      return true
    }
    const pattern = /^[0-9]{10}$/
    if(!pattern.test(this.phone)) {
      this.errorPhone = "Please enter a valid 10-digit phone number"
      return true
    }
    if(this.formType === 'add') {
      const isDuplicate = this.users.some(user=> user.phone === this.phone)
      if(isDuplicate) {
        this.errorPhone = "Phone already exists"
        return true
      }
    }
    if(this.formType === 'edit') {
      const isDuplicate = this.users.some(user=> user.phone === this.phone && user.userId != this.userId)
      if(isDuplicate) {
        this.errorPhone = "Phone already exists"
        return true
      }
    }
    this.errorPhone = ''
    return false
  }
  checkIsGenderInValid():boolean{
    if(this.gender==="") {
      this.errorGender = "Gender is required"
      return true
    }
    this.errorGender = ''
    return false
  }
  checkIsCourseInValid():boolean{
    if(!this.Java && !this.Python) {
      this.errorCourse = "At least one course should be selected"
      return true
    }
    this.errorCourse = ''
    return false
  }
  checkIsDepartmentInValid():boolean{
    if(this.department==="") {
      this.errorDepartment = "Department is required"
      return true
    } 
    this.errorDepartment = ''
    return false
  }
  checkIsAddressInValid():boolean{
    if(this.address==="") {
      this.errorAddress = "Address is required"
      return true
    }
    this.errorAddress = ''
    return false
  }
  
}

