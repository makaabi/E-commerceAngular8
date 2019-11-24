import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../data.service';
import {User} from '../../User'

@Component({
  selector: 'app-login',
  template: `
  <div class="py-5">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <span class="anchor" ></span>
      <div class="card rounded-0">
        <div class="card-header">
          <h3 class="mb-0">Login</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
              <label>Username</label>
              <input type="text" [(ngModel)]="user"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" [(ngModel)]="mypassword"  class="form-control rounded-0"  >
            </div>
            <button type="button"  class="btn btn-success float-right" (click)="onMenu(user,mypassword)">
            Login</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  Users:User[];


  constructor(private dataService:DataService,private router:Router) { }
  onMenu(user:string,mypassword:string)
 {

  var i:number;
  for(i=0;i<this.Users.length;i++)
  {
    if(user==this.Users[i].theuser_1 && mypassword==this.Users[i].password)
    break;
  }
  if(i==this.Users.length)
  this.router.navigate(['/loginerror']);
  else
  this.router.navigate(['/articles']);

 }




  ngOnInit() {
    this.Users=this.dataService.Users;
  }

}
