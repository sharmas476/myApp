import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private url = "http://jsonplaceholder.typicode.com";
  constructor(private http : Http) {
    
  }

  getUsers(){
    return this.http.get(this.url +"/posts");
  }

}
