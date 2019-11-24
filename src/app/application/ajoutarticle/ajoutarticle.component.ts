import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import { Article } from '../../article';

@Component({
  selector: 'app-ajoutarticle',
  template: `
  <app-menu></app-menu>
  <div class="py-5">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <span class="anchor" ></span>
      <div class="card rounded-0">
        <div class="card-header">
          <h3 class="mb-0">Ajout Article</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
              <label>matricule</label>
              <input type="text" [(ngModel)]="matricule"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>libelle</label>
              <input type="text" [(ngModel)]="libelle"  class="form-control rounded-0"  >
            </div>
            <div class="form-group">
              <label>marque</label>
              <input type="text" [(ngModel)]="marque"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>photo lien</label>
              <input type="text" [(ngModel)]="photo"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>prix</label>
              <input type="text" [(ngModel)]="prix"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>Date Fabrication </label>
              <input type="text" [(ngModel)]="datefab" placeholder="'yyyy-mm-dd'"  class="form-control rounded-0" >
            </div>
            <div class="form-group">
              <label>enstock</label>
              <input type="text" [(ngModel)]="enstock"   placeholder="True or False" class="form-control rounded-0" >
            </div>
            <button type="button"  class="btn btn-success float-right" (click)="ajoutearticles()">Ajouter</button>
            <button type="button"  class="btn btn-danger " (click)="versArticles()" >Annuler</button>
            
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AjoutarticleComponent implements OnInit {
  matricule:number;
  libelle:string;
  marque:string;
  photo:string;
  prix:number;
  datefab:string;
  enstock:boolean;
  obj:Article;

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  

  ajoutearticles()
  {
    var dateArr = this.datefab.split("-");

    this.obj=new Article(this.matricule,this.libelle,this.marque,this.photo,this.prix,new Date(parseInt(dateArr[0]),parseInt(dateArr[1])-1,parseInt(dateArr[2])),this.enstock);
    this.dataService.ajoutArticleServ(this.obj);
    this.router.navigate(['/articles']); 


  }

  versArticles()
  {
  this.router.navigate(['/articles']);
  }

}
