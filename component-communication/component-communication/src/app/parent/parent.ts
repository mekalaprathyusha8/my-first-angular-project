import{ Component } from '@angular/core';
import { Child } from '../child/child';
import { email } from '@angular/forms/signals';
import { User } from '../models/user.model';
import { Student } from '../models/student.model';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.html',
    styleUrl: './parent.css',
    standalone: true,
    imports: [Child, JsonPipe]       

})
export class Parent{
    student!: Student;
    students: Student[] = [];
    name = 'chintu'
    user: User = {
        name: 'chintu',
        email: 'chintu@gmail.com',
        phone: '1234567890'
    };
    users: User[] = [{
        name: 'chintu',
        email:'chintu@gmail.com',
        phone: '1234567890'
    },
    {
        name: 'sunny',
        email:'sunny@gmail.com',
        phone: '0987654321'
    },
    {
        name: 'usha',
        email:'usha@gmail.com',
        phone: '1122334455'
    }]
    receiveData(data: string) {
        console.log(data);
    }
    receiveStudent(student: Student) {
        console.log(student);
        this.student = student;
    } 
    receiveStudents(students: Student[]) {
        console.log(students);
        this.students = students;
    }                      
}