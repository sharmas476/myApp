import { MessageService } from './../services/message.service';
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
  constructor(private service : UserService, private messageService : MessageService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.users = response.json();
        if(this.isEmpty(this.users)){
          this.messageService.add('UserService: Problem fetching data');
        }else{
          this.messageService.add('UserService: All data fetched.');
        }
        //console.log(response.json());
      });
  }

  editUser(user: User){
    this.selectedUser = user;
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

}
