import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './application/error/error.component';
import { LoginerrorComponent } from './application/loginerror/loginerror.component';
import { LoginComponent } from './application/login/login.component';
import { ArticlesComponent } from './application/articles/articles.component';
import { UnarticleComponent } from './application/unarticle/unarticle.component';
import { EditarticleComponent } from './application/editarticle/editarticle.component';
import { AjoutarticleComponent } from './application/ajoutarticle/ajoutarticle.component';
import { RechercherarticleComponent } from './application/rechercherarticle/rechercherarticle.component';
import { MenuComponent } from './application/menu/menu.component';
import { GarantPipe } from './garant.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginerrorComponent,
    LoginComponent,
    ArticlesComponent,
    UnarticleComponent,
    EditarticleComponent,
    AjoutarticleComponent,
    RechercherarticleComponent,
    MenuComponent,
    GarantPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
