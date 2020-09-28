import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  modeAffichage = true;

  @Input() col: Collegue;

  constructor(private dataService: DataService) { }

  
  ngOnInit(): void {
    this.dataService.recupererCollegueCourant().subscribe(colSelect => this.col = colSelect);
  }

  clicModifier() {
    this.modeAffichage = false;
  }

  clicvalider(): void {
    this.modeAffichage = true;
  }


  clicCreer() {
    console.log("Création d'un nouveau collègue");
  }



}
