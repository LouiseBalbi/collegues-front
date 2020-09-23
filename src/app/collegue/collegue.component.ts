import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  constructor() { }

  clicModifier(event) {
    console.log("Modification du collègue", event);
  }

  clicCreer(event) {
    console.log("Création d'un nouveau collègue", event);
  }

  ngOnInit(): void {
  }

}
