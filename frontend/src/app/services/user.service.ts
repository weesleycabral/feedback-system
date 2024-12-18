import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Basepath()}/users/all`, { headers: this.Headers() });
  }
}
