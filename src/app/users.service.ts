import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;
private username:any = 'colletemine'


  constructor(private _http:HttpClient) {
    console.log("User service started...");
   }

getUser(){
  return this._http.get('https://api.github.com/users/'+this.username)

}

getRepos(){
  return this._http.get('https://api.github.com/users/'+this.username+'/repos')

}
updateUsername(username:any){
  this.username = username;
}
}
