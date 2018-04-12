import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user : User;
  constructor(private service : UserService, private router: Router) { }

  ngOnInit() {
  }

  onUpdate(user: User){
    this.service.updateUser(user).subscribe(response => {
      this.router.navigate(["users"]);
    })
  }

}
