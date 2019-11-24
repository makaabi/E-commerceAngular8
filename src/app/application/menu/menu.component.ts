import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-menu',
  template: `
  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
  <ul class="navbar-nav">
   <li class="nav-item">
     <a class="nav-link" [routerLink]="['../articles']" routerLinkActive="active">Articles</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" [routerLink]="['../ajoutarticle']" routerLinkActive="active"> Ajout d’un article </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" [routerLink]="['../rechercherarticle']" routerLinkActive="active">Rechercher d'un article</a>
   </li>
   <li class="nav-item">
   <button id="logout" class="btn btn-danger ml-2" (click)="onLogin()">Log Out</button>
   </li>
 </ul>
</nav>

   
  `,
  styles: [
    '.active {font-weight:bold;}#logout{position:relative;left:850px}'

  ]
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogin()
  {
  this.router.navigate(['/login']);
  }

}
