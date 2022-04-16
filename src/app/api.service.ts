import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from './api-interface'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASE_URL: string = 'https://api.github.com/'
  constructor(private http:HttpClient) { }

  getUsers():Observable<ApiInterface>{
return this.http.get<ApiInterface>(this.BASE_URL + 'users')
  }
  getRepository(){

  }
}
function ApiInterface(ApiInterface: any) {
  throw new Error('Function not implemented.');
}

