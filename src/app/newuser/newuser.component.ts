import { UserService } from './../services/user.service';
import { User } from './../user/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private service : UserService, private router: Router) { }

  ngOnInit() {
  }

  form = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ])
  });

  onSubmit(){
    this.service.postUser(this.form.value).subscribe(
      response => {
        this.router.navigate(["users"]);
      }
    );
    
  }
}
