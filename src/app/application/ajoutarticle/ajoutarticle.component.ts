import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import { Article } from '../../article';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';



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
        <form [formGroup]="ajoutForm" (ngSubmit)="ajoutearticles()">

            <div class="form-group">
              <label>libelle</label>
              <input type="text"   class="form-control rounded-0" formControlName="libelle"  >
            </div>
            <div *ngIf="libelle.invalid && libelle.dirty" class="alert alert-danger">
            libelle est invalide
                </div>

            <div class="form-group">
              <label>marque</label>
              <input type="text"   class="form-control rounded-0" formControlName="marque" >
            </div>
            <div *ngIf="marque.invalid && marque.dirty" class="alert alert-danger">
            marque est obligatoire
                </div>

            <div class="form-group">
              <label>photo lien</label>
              <input type="text"  class="form-control rounded-0" formControlName="photo" >
            </div>
            <div *ngIf="photo.invalid && photo.dirty" class="alert alert-danger">
            lien photo est obligatoire
                </div>

            <div class="form-group">
              <label>prix</label>
              <input type="text"  class="form-control rounded-0" formControlName="prix" >
            </div>
            <div *ngIf="prix.invalid && prix.dirty" class="alert alert-danger">
            prix est obligatoire
                </div>

            <div class="form-group">
              <label>Date Fabrication </label>
              <input type="text"  placeholder="'yyyy-mm-dd'"  class="form-control rounded-0" 
              formControlName="datefab" >
            </div>
            <div *ngIf="datefab.invalid && datefab.dirty" class="alert alert-danger">
            Date est obligatoire
                </div>

            <div class="form-group">
              <label>enstock</label>
              <input type="text"    placeholder="True or False" class="form-control rounded-0" 
              formControlName="enstock" >
            </div>
            <button type="submit"  class="btn btn-success float-right"  [disabled]="ajoutForm.invalid" >Ajouter</button>
            <button type="button"  class="btn btn-danger " (click)="versArticles()" >Annuler</button>
            </form>
            </div>
      </div>
    </div>
  `,
  styles: []
})
export class AjoutarticleComponent implements OnInit {
  ajoutForm: FormGroup;

  /*
  libelle:string;
  marque:string;
  photo:string;
  prix:number;
  datefab:string;
  enstock:boolean;
  */
  obj:Article;

  constructor(private dataService:DataService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.ajoutForm = this.formBuilder.group(
      {libelle:['', [Validators.required,Validators.minLength(3)]],
      marque: ['', Validators.required],
      photo: ['../assets/7.jpg ', Validators.required],
      prix: ['', Validators.required],
      datefab:['', Validators.required],
      enstock:[true],
      }
      )
  }
  

  ajoutearticles()
  {
   
    var  matricule:number=this.dataService.lastmatServ();
    console.log(matricule);
    
   
    var dateArr = this.ajoutForm.value['datefab'].split("-");
    
  
    if(this.dataService.verifajoutSertv(
    this.ajoutForm.value['libelle'],
    this.ajoutForm.value['marque'],
    this.ajoutForm.value['photo'],
    this.ajoutForm.value['prix'],
    this.ajoutForm.value['enstock'],
    dateArr))
    {
      
    let obj:Article=new Article(
    matricule,
    this.ajoutForm.value['libelle'],
    this.ajoutForm.value['marque'],
    this.ajoutForm.value['photo'],
    this.ajoutForm.value['prix'],
    new Date(parseInt(dateArr[0]),parseInt(dateArr[1])-1,parseInt(dateArr[2])),
    this.ajoutForm.value['enstock']);
    this.dataService.ajoutArticleServ(obj);
    this.router.navigate(['/articles']); 

     }
  

  }

  versArticles()
  {
  this.router.navigate(['/articles']);
  }

  public get libelle()
  { return this.ajoutForm.get('libelle'); }
  public get marque()
  { return this.ajoutForm.get('marque'); }
  public get photo ()
  { return this.ajoutForm.get('photo'); }
  public get prix()
  { return this.ajoutForm.get('prix'); }
  public get datefab()
  { return this.ajoutForm.get('datefab'); }

}
