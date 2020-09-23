import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  listeM: string[];

  constructor() { }


  rechercher(){
    this.listeM = listeMatricules;
  }

  ngOnInit(): void {
  }

}
