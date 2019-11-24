import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './application/error/error.component';
import { LoginerrorComponent } from './application/loginerror/loginerror.component';
import { LoginComponent } from './application/login/login.component';
import { ArticlesComponent } from './application/articles/articles.component';
import { UnarticleComponent } from './application/unarticle/unarticle.component';
import { EditarticleComponent } from './application/editarticle/editarticle.component';
import { AjoutarticleComponent } from './application/ajoutarticle/ajoutarticle.component';
import { RechercherarticleComponent } from './application/rechercherarticle/rechercherarticle.component';
import { MenuComponent } from './application/menu/menu.component';


const routes: Routes = [

  {path:'menu', component:MenuComponent},
{path:'login', component:LoginComponent},
{path:'articles', component:ArticlesComponent},
{path:'loginerror', component:LoginerrorComponent},
{path:'articles/:matricule', component:UnarticleComponent},
{path:'editarticle', component:EditarticleComponent},
{path:'ajoutarticle', component:AjoutarticleComponent},
{path:'rechercherarticle', component:RechercherarticleComponent},
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
