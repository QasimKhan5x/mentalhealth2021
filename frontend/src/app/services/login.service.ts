import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../_shared/baseUrl';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  authenticate(id: string, key: string): boolean {
    let u = this.http.get<User>(baseUrl + '/users/' + id);
    console.log(u);
    return true;
  }
}
