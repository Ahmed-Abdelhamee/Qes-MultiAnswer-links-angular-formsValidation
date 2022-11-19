import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './app/user.interface';


@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor( private http:HttpClient) { }

  url:any="http://localhost:3000/enroll";

  enroll(userdata:user){
    return this.http.post(this.url,userdata)
  }
}
