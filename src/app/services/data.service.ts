import { Injectable } from '@angular/core';
import { c2 } from '../mock/collegues.mock';
import { listeMatricules } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    return listeMatricules;
    }

    recupererCollegueCourant(): Collegue {
      return c2;
    }
  

}
