import {Component, EventEmitter, Input, Output,} from '@angular/core';
import { User } from '../models/user.model';
import { JsonPipe } from '@angular/common';
import { Student } from '../models/student.model';

@Component({
    selector: 'app-child',
    templateUrl: './child.html',
    styleUrl: './child.css',
    standalone: true,
    imports: [JsonPipe]
})
export class Child{
   @Input("parentName") name: string= '';
   @Input() user!: User;
   @Input() users: User[] = []
   @Output("send") sendData: EventEmitter<string> = new EventEmitter<string>();
   @Output() sendStudent: EventEmitter<Student> = new EventEmitter<Student>();
   @Output() sendStudents: EventEmitter<Student[]> = new EventEmitter<Student[]>();
   student = {
    name: 'chintu',
    email: 'chintu@gmail.com',
    phone: '1234567890'
   }
   students:Student[] = [
    {
        name: 'aaradhya',
        email: 'aaradhya@gmail.com',
        phone: '1234567890'
    },
    {
        name: 'surya',
        email: 'surya@gmail.com',
        phone: '0987654321'
    },
    {
        name: 'vaishu',
        email: 'vaishu@gmail.com',
        phone: '1122334455'
    }
    ]
   sendDataToParent() {
        this.sendData.emit('Hello from Child Component');
        this.sendStudent.emit(this.student);
        this.sendStudents.emit(this.students);
    }
}