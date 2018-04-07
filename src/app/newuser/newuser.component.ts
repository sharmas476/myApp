import { User } from './../user/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });
}
