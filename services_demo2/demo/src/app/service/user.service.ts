import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private http: HttpClient = inject(HttpClient);
  private api = "http://localhost:3000"
  private userapi =this.api + "/users"

  addUser(user: UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(this.userapi, user);
  } 
}