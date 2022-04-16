import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASE_URL: string = 'https://api.github.com/'
  constructor(private http:HttpClient) { }

  getUsers():Observable<CanvasUserInterface>{

  }
  getRepository(){

  }
}
