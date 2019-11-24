import { Component, OnInit } from '@angular/core';
import { Article } from '../../article';
import {DataService} from '../../data.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-unarticle',
  template: `
  <h2 class="text-center text-info display-2"> Article {{obj.matricule}}</h2>
  <ul class="list-group">
  <li class="list-group-item " ><img [src]="obj.photo" id="imgl"></li>
  <li class="list-group-item" >matricule:<span class="text-danger font-weight-bold">{{obj.matricule}}</span></li>
  <li class="list-group-item" >libelle:<span class="text-danger font-weight-bold">{{obj.libelle}}</span></li>
  <li class="list-group-item" >marque:<span class="text-danger font-weight-bold">{{obj.marque|uppercase}}</span></li>
  <li class="list-group-item" >prix:<span class="text-danger font-weight-bold">{{obj.prix}}</span></li>
  <li class="list-group-item" >date Fabrication:<span class="text-danger font-weight-bold">{{obj.dateFabrication|date: 'yyyy'}}</span></li>
  <li class="list-group-item"[ngClass]="(obj.enstock)?'c1':'c2'">en Stock</li>
  <li class="list-group-item" ><span class="text-success font-weight-bold">{{obj.prix|garant}}</span></li>
  </ul>
    <button class="btn btn-dark ml-2" (click)="onArticles()">Retour</button>
  `,
  styles: [
    '#imgl{margin-left:30%;}.c1{background-color:green}.c2{background-color:red}'

  ]
})
export class UnarticleComponent implements OnInit {
  obj:Article;
  matricule:number;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
    this.obj=this.dataService.getEmployeByMatriculeServ(this.matricule);
  }
  onArticles()
  {
  this.router.navigate(['/articles']);
  }

}
