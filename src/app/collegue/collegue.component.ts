import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  modeAffichage = true;


  @Input() col: Collegue;

  constructor() { }

  

  clicModifier() {
    //console.log("Modification du collègue", event);
    this.modeAffichage = false;
  }

  clicvalider(): void {
    this.modeAffichage = true;
  }


  clicCreer() {
    console.log("Création d'un nouveau collègue");
  }

  ngOnInit(): void {
  }

}
