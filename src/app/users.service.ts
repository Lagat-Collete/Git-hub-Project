import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;
private username:any = 'colletemine';
private client_id = 'a81d5fc03398488b7ee1';
private  client_secret = 'a992a6e1b5bc4955585b8944ca9f59b01c21cc0c'


  constructor(private _http:HttpClient) {
    console.log("User service started...");
   }

getUser(){
  return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)

}

getRepos(){
  return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)

}
updateUsername(username:any){
  this.username = username;
}
}
