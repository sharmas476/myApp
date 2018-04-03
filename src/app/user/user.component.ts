import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User;
  selectedUser: User;
  constructor(private service : UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.users = response.json();
        //console.log(response.json());
      });
  }

  editUser(user: User){
    this.selectedUser = user;
  }

}
