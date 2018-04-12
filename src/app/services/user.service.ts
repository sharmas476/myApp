import { User } from './../user/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private url = "http://localhost:8080/users";
  constructor(private http : Http) {
    
  }

  getUsers(){
    return this.http.get(this.url +"/all");
  }

  postUser(user : User){
    return this.http.post(this.url + "/save", user);
  }

  deleteUser(id: number){
    return this.http.delete(this.url + "/" + id);
  }

  updateUser(user: User){
    return this.http.put(this.url +"/update", user);
  }

}
