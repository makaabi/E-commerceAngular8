import { Injectable } from '@angular/core';
import {User} from './User'
import { Article } from './Article';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public Users:User[]=[
    new User('amine','kaabi'),
    new User('mohamed','123456'),
    new User('kaabi','azerty'),
    new User('user','user'),
    new User('admin','admin')

  ]

  public lesArticles:Article[] = [
    new Article(201,'V206HQL','Acer','../assets/1.jpg',245,new Date(2015, 11, 24),true),
    new Article(202,'E2016H','Dell','../assets/2.jpg',265,new Date(2013, 4, 10),true),
    new Article(203,'E2216HV','Dell','../assets/3.jpg',299,new Date(2015, 0, 11),true),
    new Article(204,'V214A','HP','../assets/4.jpg',329,new Date(2017, 10, 2),true),
    new Article(205,'S2319H','Dell','../assets/5.jpg',459,new Date(2016, 1, 15),false),
    new Article(206,'Samsung 27','Samsung','../assets/6.jpg',1579,new Date(2014, 5, 21),true)

    
    ];
    getEmployeByMatriculeServ(matricule : number):Article
    {
      var i:number;
      for(i=0;i<this.lesArticles.length;i++)
      {
        if(matricule==this.lesArticles[i].matricule)
        return this.lesArticles[i];
      }
      return null;

    }

    deleteArticleServ(matricule:number):Article[]
    {
      let i:number
      for(i=0;i<this.lesArticles.length;i++)
      {
        if(matricule==this.lesArticles[i].matricule)
        this.lesArticles.splice(i,1);
  
      }
      return this.lesArticles;

    }

    ajoutArticleServ(obj:Article)
    {
      this.lesArticles.push(obj); 
    }
    
    editerArticleServ(matriculeo:number,matricule:number,libelle:string,marque:string,photo:string,prix:number,enstock:boolean)
    {

      let obj:Article=this.getEmployeByMatriculeServ(matriculeo);
      

      
      if(matricule>=100 && matricule<1000)
      obj.matricule=matricule;

      if(libelle.length!=0)
      obj.libelle=libelle;

      if(marque.length!=0)
      obj.marque=marque;

      if(photo.length!=0)
      obj.photo=photo;

      if(prix!=null)
      obj.prix=prix;
      
      if(enstock==true || enstock==false)
      obj.enstock=enstock;


     
    }




  constructor() { }
}
