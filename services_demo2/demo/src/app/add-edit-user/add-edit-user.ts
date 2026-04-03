import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-edit-user.html',
})
export class AddEditUser {
  user: UserModel = { id: '',name: '', email: '',phone: '',
  }
  addUser() {
    console.log(this.user);
  }
  onSubmit() {
    this.addUser();
  }
}
