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
  public newEmail: string = '';  
  public newUrl: string = '';

  public test = "toto";

  @Input() col: Collegue;

  constructor(private dataService: DataService) { }

  
  ngOnInit(): void {
    this.dataService.recupererCollegueCourant().subscribe(colSelect => this.col = colSelect);
  }

  clicModifier() {
    this.modeAffichage = false;   
  }

  clicvalider(): void {
    console.log(this.newEmail);
    console.log(this.newUrl);
    
    this.dataService.modifierCollegue(this.newEmail, this.newUrl).subscribe();
    
    
    this.modeAffichage = true;

  }


  clicCreer() {
    console.log("Création d'un nouveau collègue");
  }



}
