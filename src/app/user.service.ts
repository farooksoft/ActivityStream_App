import { Injectable } from '@angular/core';
import { User } from './user/user';
import { Http } from '@angular/http';


@Injectable()
export class UserService {

  constructor(private http : Http) { }
    
    private USER_SERVICE_BASE_URL = 'http://localhost:8087/api/user';
  getUsers() {
    return this.http.get(this.USER_SERVICE_BASE_URL);
  }

}
