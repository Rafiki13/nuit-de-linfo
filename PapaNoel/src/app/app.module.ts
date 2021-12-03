import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { CreateLetterComponent } from './create-letter/create-letter.component';



@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    CreateLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
