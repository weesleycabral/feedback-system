import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {



  constructor(
    private http: HttpClient
  ) {
    super();
  }

  register(name: string, email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.Basepath()}/register`, { name, email, password }, { headers: this.Headers() }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("email", email);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.Basepath()}/login`, { email, password }, { headers: this.Headers() }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("email", email);
      })
    );
  }
}
