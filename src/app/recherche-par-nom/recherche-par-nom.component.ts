import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import { environment } from '../../environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  //URL_BACKEND = environment.backendUrl;

  listeM: string[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  selectionner(obj: string): void{
    console.log(obj);
  }

  rechercher() {
    this.listeM = listeMatricules;
    //this.dataService.rechercherParNom('');
  }




}
