import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { Article } from '../../article';

@Component({
  selector: 'app-articles',
  template: `
  <app-menu></app-menu>
    <h2 class="text-center text-danger">Liste Articles</h2>
    <h5 class="ml-2 text-success">Trier</h5>
    <select [(ngModel)]="choix" class="ml-2 bg-danger" (change)="sortList(choix)" >
    <option class="text-white"  value="prixasc">par prix ascendant</option>
    <option class="text-white" value="prixdesc">par prix descendant</option>
    <option class="text-white" value="nomasc">par nom ascendant </option>
    <option class="text-white" value="nomdesc">par nom descendant</option>
    </select>    
    <hr>
    <div class="container">
    <ul class="list-group" >
    <li class="list-group-item" class="bgl" *ngFor="let t of lesarticles">
    <div class="mgl">
    <img [src]="t.photo" >
    <ul>
    <li > <span class="text-info">Matricule:</span> {{t.matricule}}</li>
    <li> <span class="text-info">Libelle:</span>{{t.libelle}}</li>
    <li> <span class="text-info">Prix:</span>{{t.prix}}dt</li>
    </ul>
    <a [routerLink]="['/articles',t.matricule]"><button class="btn btn-info ml-4">détail </button></a>
    <a [routerLink]="['/editarticle']"><button class="btn btn-warning ml-4">éditer </button></a>
    <button class="btn btn-danger ml-4" (click)="deleteArticle(t.matricule)" >effacer </button>
    
    </div>
    <hr>
    </li>
    </ul>
    </div>
  `,
  styles: [
    '.bgl {background-color:#ffe6e6	;}li{list-style-type:none}.mgl{margin-left:100px;}hr{backgound-color:blue;}'

  ]
})
export class ArticlesComponent implements OnInit {
  lesarticles:Article[];
  choix:string="prixasc";

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.lesarticles = this.dataService.lesArticles;

  }
  deleteArticle(matricule:number)
  {

    this.lesarticles=this.dataService.deleteArticleServ(matricule);

  }
  sortList(choix:string)
  {
    if(choix=="prixdesc")
    this.lesarticles.sort(this.compareprixdesc);
    else if (choix=="prixasc")
    this.lesarticles.sort(this.compareprixasc);
    else if (choix=="nomasc")
    this.lesarticles.sort(this.comparenomasc);
    else if (choix=="nomdesc")
    this.lesarticles.sort(this.comparenomdesc);


  }

  compareprixdesc( a:Article, b:Article ):number
  {
    if ( a.prix < b.prix )
      return 1;
    if ( a.prix > b.prix )
      return -1;
    else return 0;
  }

  compareprixasc( a:Article, b:Article ):number
  {
    if ( a.prix < b.prix )
      return -1;
    if ( a.prix > b.prix )
      return  1;
    else return 0;
  }

  comparenomasc( a:Article, b:Article ):number
  {
    if ( a.libelle < b.libelle )
      return -1;
    if ( a.libelle > b.libelle )
      return  1;
    else return 0;
  }

  comparenomdesc( a:Article, b:Article ):number
  {
    if ( a.libelle < b.libelle )
      return 1;
    if ( a.libelle > b.libelle )
      return  -1;
    else return 0;
  }

}
