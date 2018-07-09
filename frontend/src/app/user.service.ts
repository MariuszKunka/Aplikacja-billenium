import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged = false;

  constructor(private _http: HttpClient) {}

  register(body: any) {
    return this._http.post('http://127.0.0.1:3000/user/register', body, {
    observe: 'body',
    headers: new HttpHeaders().append('Content-type', 'application/json')
    });

  }

  login(body: any) {
    return this._http.post('http://127.0.0.1:3000/user/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json')
    });
  }

  user() {
    return this._http.get('http://127.0.0.1:3000/user/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json')
      });
  }

  logout() {
    return this._http.get('http://127.0.0.1:3000/user/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json')
      });
  }
}

