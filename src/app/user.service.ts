import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:3000/users'
  
  // get all users
  getUsers() {
    return this.http.get<User[]>(this.baseUrl)
  }

  // get user by id
  getUserById(id: number) {
    return this.http.get<User[]>(this.baseUrl + '/' + id)
  }

  // create user
  createUser(user: User) {
    return this.http.post(this.baseUrl, user)
  }

  // modify user
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user)
  }

  // delete user
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id)
  }
  
}
