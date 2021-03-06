

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})

export class GhUserComponent implements OnInit {
user:any;
repos:any;
username:any;


  constructor(private _usersService: UsersService) { 
    this.user = false
    this._usersService.getUser().subscribe((user: any) =>{
      this.user = user;
      console.log(user);
    });

    this._usersService.getRepos().subscribe((repos) =>{
      this.repos = repos;
      
    });

  }
  search(){
    this._usersService.updateUsername(this.username)


    this._usersService.getUser().subscribe((user: any) =>{
      this.user = user;
      console.log(user);
    });

    this._usersService.getRepos().subscribe((repos) =>{
      this.repos = repos;
      
    });


  }

  ngOnInit(): void {
  }

}

