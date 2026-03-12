import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user';
import { UsersComponent } from './users/users';
import { User } from './models/student.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddUserComponent, UsersComponent],
  templateUrl: './app.html'
})
export class App {

  users: User[] = []

  selectedUser!: User
  formType: string = "add"

  addUser(user: User) {
    user.userid = this.users.length + 1
    this.users.push(user)
  }

  updateUser(user: User) {

    this.users = this.users.map(u => {
      if (u.userid === user.userid) {
        return user
      }
      return u
    })

    this.formType = "add"
    this.selectedUser = {} as User
  }

  deleteUser(id: number) {

    this.users = this.users.filter(user => user.userid !== id)

    // reset form if deleted user was being edited
    if (this.selectedUser && this.selectedUser.userid === id) {
      this.selectedUser = {} as User
      this.formType = "add"
    }

  }

  editUser(id: number) {

    const user = this.users.find(u => u.userid === id)

    if (!user) return

    this.selectedUser = user
    this.formType = "edit"

  }

}