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
    return this.http.post<LoginResponse>(`${this.Basepath()}/auth/register`, { name, email, password }, { headers: this.Headers() }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("id", value.id);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("userName", name);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.Basepath()}/auth/login`, { email, password }, { headers: this.Headers() }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("id", value.id);
        sessionStorage.setItem("userName", value.name);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("id");
  }
}
