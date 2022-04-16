import { Component, OnInit } from '@angular/core';
import { ApiInterface } from '../api-interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:ApiInterface[] = []
  constructor(private usersServive: ApiService) { }

  ngOnInit(): void {
   this.usersServive.getUsers().subscribe(
    data => console.log(data)
   )
     
   
  }

}
