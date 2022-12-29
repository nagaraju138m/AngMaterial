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
  putUser(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/Users/"+id, data);
  }
  deleteuser(id:number){
    return this.http.delete<any>("http://localhost:3000/Users/"+id);
  }

}
