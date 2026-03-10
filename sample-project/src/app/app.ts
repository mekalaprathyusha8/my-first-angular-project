// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';
// import { BodyComponent } from '../body/body.component';
// import { FooterComponent } from '../footer/footer.component';
// import { email } from '@angular/forms/signals';

// import { Component, signal, ViewEncapsulation } from '@angular/core';
// import { User } from './models/user.model';
// @Component({
//   selector: 'app-root',
//   // imports: [RouterOutlet, HeaderComponent,BodyComponent,FooterComponent],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
//   standalone: true,
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class App {
//   protected readonly title = signal('sample-project');

  // name = 'Angular';
  // textType = "text";
  // inputclass = "text-box-green";
  // inputstyle = `
  // font-size:2rem;
  // font-weight: bold;
  // `;
  // constructor(){
  //   console.log(this.getFullName());
  // }
  // getFullName(){
  //   return "Mekala Prathyusha"
  // }
  // inputType = "text";
  // name="Angular";
  // getFullName(){
  // return "Mekala Prathyusha"
  // }
  // colSpanMessage = 3
  // colSpanPrice= 2

  // user= {
  //   userId: 1,
  //   name: "Mekala Prathyusha",
  //   email: "mekalaprathyusha@gmail.com",
  //   phone: 1234567890
  // }
  // user: User = {userId: 1, name: "Mekala Prathyusha", email: "mekalaprathyusha@gmail.com", phone: 1234567890, age: 24, gender: "female"};
 // users!: User[]

//  constructor(){
//   this.assignUser();
//  }
//   assignUser()
//   {
//     this.users =
//     [
//       {userId: 1,name: "Mekala Prathyusha",email: "mekalaprathyusha@gmail.com",phone: 1234567890, status: "active", backgroundColor:"#92d6ef", fontSize: "1.5rem"},
//       {userId: 2,name: "sunny",email: "sunny@gmail.com",phone: 9876543210,age: 25,status: "inactive", backgroundColor:"#ebef92", fontSize: "2rem"},
//       {userId: 3,name: "chintuu",email: "chintuu@gmail.com",phone: 1122334455,age: 22,gender: "male",status: "active", backgroundColor:"#92ef92", fontSize: "2.5rem"},
//       {userId: 4,name: "Prathyusha Mekala",email: "prathyushamekala@gmail.com",phone: 1234567893,gender: "female",status: "inactive", backgroundColor:"#ef9292", fontSize: "3rem"}
//     ]
//   }
// }

// buttonClick(event:Event){
//   console.log("button clicked", event);
// }
// foused(){
//   console.log("input focued");
// }mouseenter(){
//   console.log("mouse entered");
// }
// blurred(){
//   console.log("input blurred");
// }
// }






// import { Component, ViewEncapsulation } from '@angular/core';
// import { User } from './user.model';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './app.html',
//   styleUrls: ['./app.css'],
//   encapsulation: ViewEncapsulation.Emulated,
//   imports: [FormsModule, CommonModule],
// })
// export class Home {
//   id: number = 0;
//   name: string = "";
//   phone: string = "";
//   email: string = "";
//   gender: string = "";
//   course: string = "";
//   department: string = "";
//   address: string = "";

//   // checkbox variables
//   C: boolean = false;
//   Js: boolean = false;
//   Java: boolean = false;
//   Python: boolean = false;

//   user: User[] = [];

//   formHeading: string = 'Add User';
//   buttonText: string = 'Add';
//   currentEditId: number | null = null;

//   editUser(id: number) {
//     const selectedUser = this.user.find(user => user.id === id);

//     if (selectedUser) {
//       this.currentEditId = id;
//       this.formHeading = 'Edit user';
//       this.buttonText = 'Update';

//       this.name = selectedUser.name;
//       this.email = selectedUser.email;
//       this.phone = selectedUser.phone.toString();
//       this.address = selectedUser.address;
//       this.department = selectedUser.department;
//       this.gender = selectedUser.gender;
//       this.course = selectedUser.course;

//       // restore checkbox values
     
//       this.C = selectedUser.course.includes("C");
//       this.Js = selectedUser.course.includes("Js");
//       this.Python = selectedUser.course.includes("Python");
//       this.Java = selectedUser.course.includes("Java");

//     }
//   }

//   addUser() {

//     // convert checkbox values to string
//     let selectedCourses: string[] = [];

//     if (this.C) selectedCourses.push("C");
//     if (this.Js) selectedCourses.push("Js");

//     this.course = selectedCourses.join(", ");

//     if (this.currentEditId !== null) {

//       const index = this.user.findIndex(u => u.id === this.currentEditId);

//       if (index !== -1) {
//         this.user[index] = {
//           id: this.currentEditId,
//           name: this.name,
//           email: this.email,
//           phone:this.phone,
//           address: this.address,
//           department: this.department,
//           course: this.course,
//           gender: this.gender
//         };
//       }

//       this.currentEditId = null;

//     } else {

//       let data: User = {
//         id: this.user.length + 1,
//         name: this.name,
//         email: this.email,
//         phone: this.phone,
//         address: this.address,
//         department: this.department,
//         course: this.course,
//         gender: this.gender
//       };

//       this.user.push(data);
//     }



import { Component, LOCALE_ID} from '@angular/core';
import {Student} from './models/student.model'
import{CaptalizePipe} from  "./pipes/capitalize.pipe"
import{DatePipe, DecimalPipe} from '@angular/common'
import {ConcatPipe } from './pipes/concat.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { CurrencyPipe} from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [{ provide: LOCALE_ID, useValue: 'en-IN'  }],
  imports: [CaptalizePipe, ConcatPipe, DecimalPipe, PhonePipe, CurrencyPipe, DatePipe]
})

export class App {
  students: Student[]=[
  { 
    name: "prathyusha",
    email:"prathyusha@gmail.com",
    status:"active",
    dob:"2002-10-22T11:55",
    phone:7075516924,
    emcetRank: 17349,
    yearlyFee:600.2500,
    aggregate: 9.3,
    backlog:0,
    gender:"Female",
    marks:{
      java:89,
      python:56,
    }
  },
  { 
    name: "chintu",
    email:"chintu@gmail.com",
    status:"active",
    dob:"2000-10-22T12:32",
    phone:6305612347,
    emcetRank: 174549,
    yearlyFee:800.35200,
    aggregate: 9.4,
    backlog:2,
    gender:"male",
    marks:{
      java:60,
      python:46,
      ios:75,
    }
  },
  { 
    name: "usha",
    email:"usha@gmail.com",
    status:"active",
    dob:"2000-10-18T08:00",
    phone:7032416324,
    emcetRank: 20349,
    yearlyFee:70000,
    aggregate: 8.3,
    backlog:0,
    gender:"Female",
    marks:{
      java:80,
      python:66,
      php:55
    }
  },{
    name: "sunny",
    email:"sunny@gmail.com",
    status:"inactive",
    dob:"2001-10-22T12:32",
    phone:9876543210,
    emcetRank: 17349,
    yearlyFee:600.2500,
    aggregate: 9.3,
    backlog:1,
    gender:"male",
    marks:{
      java:89,
      python:56,
    }
  }
  ]
}