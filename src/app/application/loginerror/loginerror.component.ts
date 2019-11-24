import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-loginerror',
  template: `
  <h3 class="display-4 text-danger">Error:please check your username and password</h3>
  <button class="btn btn-secondary ml-2" (click)="onRetour()">retour</button>
  `,
  styles: []
})
export class LoginerrorComponent implements OnInit {

  onRetour()
  {
    this.router.navigate(['/login']);
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
