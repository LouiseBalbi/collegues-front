import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  //URL_BACKEND = environment.backendUrl;

  listeM: string[];

  constructor() { }


  rechercher(){
    this.listeM = listeMatricules;
  }

  ngOnInit(): void {
  }

}
