import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CollegueCree } from '../models/CollegueCree';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-collegue-creer',
  templateUrl: './collegue-creer.component.html',
  styleUrls: ['./collegue-creer.component.css']
})
export class CollegueCreerComponent implements OnInit {

  collegueCree: CollegueCree = {};
  dateString: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  valider(): void{
    console.log(this.collegueCree);
    this.collegueCree.dateNaissance = new Date(this.dateString);
    console.log(this.collegueCree);
    this.dataService.creerCollegue(this.collegueCree);
  }

}
