import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueCreerComponent } from './collegue-creer/collegue-creer.component'
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component'
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageGallerieComponent } from './pages/page-gallerie/page-gallerie.component';
import { PageAproposComponent } from './pages/page-apropos/page-apropos.component';
import { PageCreerCollegueComponent } from './pages/page-creer-collegue/page-creer-collegue.component';
import { MatriculeSelectionneComponent } from './matricule-selectionne/matricule-selectionne.component';

export const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'gallerie', component: PageGallerieComponent },
  { path: 'apropos', component: PageAproposComponent },
  { path: 'creer', component: PageCreerCollegueComponent },
  { path: 'gallerie/:matricule', component: MatriculeSelectionneComponent },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    CollegueCreerComponent,
    MenuComponent,
    PageAccueilComponent,
    PageGallerieComponent,
    PageAproposComponent,
    PageCreerCollegueComponent,
    MatriculeSelectionneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
