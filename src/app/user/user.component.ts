import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : any[];
  constructor(private service : UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.users = response.json();
      });
  }

}
