import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from '../class/login';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginSubject: BehaviorSubject<Login>;
  private loginObs: Observable<Login>;

  constructor(private http: HttpClient) {
    const token = JSON.parse(localStorage.getItem(Globals.APP_USER_TOKEN));
    this.loginSubject = new BehaviorSubject<Login>(token);
    this.loginObs = this.loginSubject.asObservable();  
    }
    public get tokenData(){
      return JSON.parse(localStorage.getItem(Globals.APP_USER_TOKEN));
    }
    
    public login(username: string, password: string){
      return this.http.post<Login>(Globals.APP_API + 'login_check', {username, password})
      .pipe(map((data) => {
        if(data && data.token){
          localStorage.setItem(Globals.APP_USER_TOKEN, JSON.stringify(data));
          this.loginSubject.next(data);
        }
        return data;
      }));
  }
}
