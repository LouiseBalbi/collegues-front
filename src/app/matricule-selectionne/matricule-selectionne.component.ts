import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-matricule-selectionne',
  templateUrl: './matricule-selectionne.component.html',
  styleUrls: ['./matricule-selectionne.component.css']
})
export class MatriculeSelectionneComponent implements OnInit {

  matricule: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 

    this.matricule = route.snapshot.paramMap.get("matricule");
    this.dataService.selectionnerMatricule(this.matricule).subscribe();
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {this.matricule = params.get('matricule');
    // console.log(this.matricule);
    // this.dataService.selectionnerMatricule(this.matricule);
  //});
  }


}
