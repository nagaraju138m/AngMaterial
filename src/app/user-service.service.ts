import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  addUsers(data: any){
    return this.http.post<any>("http://localhost:3000/Users/", data);
  }

  getUsers(){
    return this.http.get<any>("http://localhost:3000/Users/");
  }

}
