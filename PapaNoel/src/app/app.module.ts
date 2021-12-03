import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { CreateLetterComponent } from './create-letter/create-letter.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: LetterComponent },
  { path: 'create', component: CreateLetterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    CreateLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
