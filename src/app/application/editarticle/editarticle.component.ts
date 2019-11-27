import { Component, OnInit } from '@angular/core';
import { Article } from '../../article';
import {DataService} from '../../data.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editarticle',
  template: `
  <div class="py-5">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <span class="anchor" ></span>
      <div class="card rounded-0">
        <div class="card-header">
          <h3 class="mb-0">Editer un Article</h3>
        </div>
        <div class="card-body">
        <div class="form-group">
              <label>matricule originale</label>
              <input type="text" [(ngModel)]="matriculeo"  placeholder="obligatoire"  class="form-control rounded-0" >
            </div>
            <div [hidden] ="!submitted" class="alert alert-danger">
            {{message}}
            </div>
            <div class="form-group">
              <label>matricule</label>
              <input type="text" [(ngModel)]="matricule"    class="form-control rounded-0" >
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
              <label>enstock</label>
              <input type="text" [(ngModel)]="enstock"   placeholder="True or False" class="form-control rounded-0" >
            </div>
            <button type="button"  class="btn btn-warning float-right" (click)="editerarticle()">Editer</button>
            <button type="button"  class="btn btn-danger " (click)="versArticlesr()" >Annuler</button>
            
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EditarticleComponent implements OnInit {
  matriculeo:number;
  matricule:number;
  libelle:String="";
  marque:String="";
  photo:String="";
  prix:number;
  enstock:boolean;
  submitted:boolean=false;
  message:String;

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }

  editerarticle()
  {

    if(this.dataService.getEmployeByMatriculeServ(this.matriculeo)!=null)
    {
    this.dataService.editerArticleServ(this.matriculeo,this.matricule,this.libelle,this.marque,this.photo,this.prix,this.enstock);
    this.router.navigate(['/articles']);
    }
    else 
    {
      this.message="Le matricule entré n'existe pas !";
      this.submitted=true;
    }

  }

  versArticlesr()
  {
  this.router.navigate(['/articles']);
  }

}
