import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
user = 'colletemine'

BASE_API = `https://api.github.com/users/${this.user}`
BASE_REPO_URL = `https://api.github.com/users/${this.user}/repos`

  constructor(private http:HttpClient) { }

      getGithubUser():Observable<any>{
        return this.http.get<any>(this.BASE_API)
      }

      getUserRepo():Observable<any>{
        return this.http.get<any>(this.BASE_REPO_URL)
      }

}
function ApiInterface(ApiInterface: any) {
  throw new Error('Function not implemented.');
}

