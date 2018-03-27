import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private url = "localhost:8080/users";
  constructor(private http : Http) {
    
  }

  getUsers(){
    return this.http.get(this.url);
  }

}
