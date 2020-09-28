import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueCreerComponent } from './collegue-creer/collegue-creer.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    CollegueCreerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
