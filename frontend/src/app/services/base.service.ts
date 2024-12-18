import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public Basepath() {
    return 'http://localhost:8080';
  }

  public Headers() {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
      'Access-Control-Allow-Credentials': 'true',
    });
  }
}
