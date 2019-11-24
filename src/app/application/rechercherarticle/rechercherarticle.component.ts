import { Component, OnInit } from '@angular/core';
import { Article } from '../../article';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-rechercherarticle',
  template: `
  <app-menu></app-menu>
  <h2 class="text-center text-danger">Liste Articles</h2>
  <h3 class="text-success">Search by Price</h3>
  <div class="active-pink-3 active-pink-4 mb-4">
  <input class="form-control" type="text" placeholder="search by price" [(ngModel)]="prix" aria-label="Search">
  </div>
  <h3 class="text-success">Search by name</h3>
  <div class="active-pink-3 active-pink-4 mb-4">
  <input class="form-control" type="text" placeholder="search by name" [(ngModel)]="name" aria-label="Search">
  </div>
  <div class="container">
  <ul class="list-group" >
  <ng-container *ngFor="let t of lesarticles" >
  <li class="list-group-item" class="bgl" *ngIf="t.prix>=prix && t.libelle.toUpperCase().indexOf(name.toUpperCase())!=-1" >
  <div class="mgl">
  <img [src]="t.photo" >
  <ul>
  <li > <span class="text-info">Matricule:</span> {{t.matricule}}</li>
  <li> <span class="text-info">Libelle:</span>{{t.libelle}}</li>
  <li> <span class="text-info">Prix:</span>{{t.prix}}dt</li>
  </ul>
  </div>
  <hr>
  </li>
  </ng-container>
  </ul>
  </div>
  `,
  styles: [
    '.bgl {background-color:#ffe6e6	;}li{list-style-type:none}.mgl{margin-left:100px;}hr{backgound-color:blue;}'

  ]
})
export class RechercherarticleComponent implements OnInit {
  lesarticles:Article[];
  prix:number=0;
  name:string="";

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.lesarticles = this.dataService.lesArticles;

  }

}
