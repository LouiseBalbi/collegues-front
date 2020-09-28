import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  listeM: string[];

  matriculeNonTrouve = false;
  erreurTechnique = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  selectionner(matricule: string): void {
    this.dataService.selectionnerMatricule(matricule)
      .subscribe(() => { },
        error => this.erreurTechnique = true);
  }

  rechercher(nomSaisi: string) {
    this.listeM= [];
    this.dataService.rechercherParNom(nomSaisi).subscribe(matriculesBack => {    
      this.erreurTechnique = false;
        if (matriculesBack.length > 0) {
          this.matriculeNonTrouve = false;
          this.listeM = matriculesBack
        } else {
          this.matriculeNonTrouve = true;
        }

      },
        error => this.erreurTechnique = true);
    
  }




}
