import { Component, OnInit, } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})


  export class UserComponent implements OnInit{
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
function submitUsername(arg0: string, arg1: string, arg2: string, creted: any, arg4: string) {
  throw new Error('Function not implemented.');
}

function creted(arg0: string, arg1: string, arg2: string, creted: any, arg4: string) {
  throw new Error('Function not implemented.');
}

