import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usersList: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  public getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.usersList = data
    })
  }

}
