import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models/Collegue';
import { DataService } from 'src/app/services/data.service';
import { PageAccueilComponent } from '../page-accueil/page-accueil.component';

interface Photo {
    matricule:string;
    photoUrl: string
}

@Component({
  selector: 'app-page-gallerie',
  templateUrl: './page-gallerie.component.html',
  styleUrls: ['./page-gallerie.component.css']
})
export class PageGallerieComponent implements OnInit {

  photos: Photo[];
  erreurTechnique = false;


  constructor(private dataService: DataService) { }

  getPhotos(): void {
   this.dataService.afficherPageGallerie().subscribe(res => {
      this.photos = res;
   },
   error => this.erreurTechnique = true);  
  }

  ngOnInit(): void {
    this.getPhotos();
    console.log(this.photos);
    
  }

  selectionner(matricule: string): void {
    this.dataService.selectionnerMatricule(matricule).subscribe();
  }


}
