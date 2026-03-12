
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { User } from "../models/student.model";

@Component({
 selector:"app-child",
 standalone:true,
 imports:[CommonModule],
 templateUrl:"./child.html",
 styleUrls:["./child.css"]
 
})

export class ChildComponent{

  @Input() users:User[]=[]

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() editEvent = new EventEmitter<number>()

  deleteUser(id:number){
  this.deleteEvent.emit(id)
  }

  editUser(id:number){
  this.editEvent.emit(id)
  }

}