import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { c2 } from '../mock/collegues.mock';
import { listeMatricules } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CollegueCree } from '../models/CollegueCree';


interface CollegueBack{
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
  photoUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND = environment.backendUrl;
  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  recupererCollegue(){
    return this.http.get<Collegue>(this.URL_BACKEND);
  }

  rechercherParNom(nom: string): Observable<string[]> {
    //return listeMatricules;
    return this.http.get<string []>(this.URL_BACKEND + '/collegues?nom='+nom);
    }

    recupererCollegueCourant(): Observable<Collegue> {
      return this.subCollegueSelectionne.asObservable();
    }

    selectionnerMatricule(matricule: string): Observable<Collegue> {
      return this.http.get<CollegueBack>(this.URL_BACKEND + '/collegues/'+matricule)
        .pipe(
          map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
            new Date(colBack.dateNaissance), colBack.photoUrl)),
          tap(collegue => this.subCollegueSelectionne.next(collegue))
        );
    }


    // creerCollegue(collegueCree: CollegueCree): any {
    //   this.http.post(this.URL_BACKEND + '/collegues', collegueCree).subscribe( result => console.log(result));

    // }

    creerCollegue(collegueCree: CollegueCree): Observable<Collegue> {
      return this.http.post<CollegueBack>(
        this.URL_BACKEND + '/collegues',
        collegueCree)
        .pipe(
          map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
            new Date(colBack.dateNaissance), colBack.photoUrl)));
    }
  
  

}
