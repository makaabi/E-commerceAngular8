import { Component, OnInit } from '@angular/core';
import { Article } from '../../article';
import {DataService} from '../../data.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';




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
        <form [formGroup]="modifForm" (ngSubmit)="editerarticle()">

        <div class="form-group">
              <label>matricule originale</label>
              <input type="text"   placeholder="obligatoire"  class="form-control rounded-0"
              formControlName="matriculeo" >
            </div>
            
            <div class="form-group">
              <label>matricule</label>
              <input type="text"     class="form-control rounded-0" 
              formControlName="matricule">
            </div>
            <div class="form-group">
              <label>libelle</label>
              <input type="text"   class="form-control rounded-0"
              formControlName="libelle"  >
            </div>
            <div class="form-group">
              <label>marque</label>
              <input type="text"   class="form-control rounded-0"
              formControlName="marque" >
            </div>
            <div class="form-group">
              <label>photo lien</label>
              <input type="text"   class="form-control rounded-0"
              formControlName="photo" >
            </div>
            <div class="form-group">
              <label>prix</label>
              <input type="text"  class="form-control rounded-0"
              formControlName="prix" >
            </div>
            <div class="form-group">
              <label>enstock</label>
              <input type="text"    placeholder="True or False" class="form-control rounded-0" 
              formControlName="enstock">
            </div>
            <button type="submit"  class="btn btn-warning float-right" >Editer</button>
            <button type="button"  class="btn btn-danger " (click)="versArticlesr()" >Annuler</button>
            </form>

        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EditarticleComponent implements OnInit {
  modifForm: FormGroup;
/*
  matriculeo:number;
  matricule:number;
  libelle:String="";
  marque:String="";
  photo:String="";
  prix:number;
  enstock:boolean;
  */


  constructor(private dataService:DataService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.modifForm = this.formBuilder.group(
      {
      matriculeo:['', [Validators.required,Validators.minLength(3)]],
      matricule: [''],
      libelle:[''],
      marque: [''],
      photo: [''],
      prix: [],
      datefab:[''],
      enstock:[],
      }
      )
  }

  editerarticle()
  {

    if(this.dataService.getEmployeByMatriculeServ(this.modifForm.value['matriculeo'])!=null)
    {
      
    this.dataService.editerArticleServ
    (
      this.modifForm.value['matriculeo'],
      this.modifForm.value['matricule'],
      this.modifForm.value['libelle'],
      this.modifForm.value['marque'],
      this.modifForm.value['photo'],
      this.modifForm.value['prix'],
      this.modifForm.value['enstock'],
      );
    this.router.navigate(['/articles']);
    
   
  }
  

  }

  versArticlesr()
  {
  this.router.navigate(['/articles']);
  }

}
