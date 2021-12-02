import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { PageRechercheComponent } from './recherche/page-recherche/page-recherche.component';
import { BarreDeRechercheComponent } from './recherche/barre-de-recherche/barre-de-recherche.component';
import { MissionComponent } from './mission/mission/mission.component';
import { SoumettreComponent } from './soumission/soumettre/soumettre.component';
import { GestionComponent } from './soumission/gestion/gestion.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MenuComponent } from './root/menu/menu.component';
import { FooterComponent } from './root/footer/footer.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "recherche", component: PageRechercheComponent},
  {path: "mission", component: MissionComponent},
  {path: "soumission/ajout", component: SoumettreComponent},
  {path: "soumission/gestion", component: GestionComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageRechercheComponent,
    BarreDeRechercheComponent,
    MissionComponent,
    SoumettreComponent,
    GestionComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
