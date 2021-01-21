import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  /*   @Output() forwardPersonneEvent = new EventEmitter(); */
  constructor(
    private cvService: CvService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => this.personnes = personnes,
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        this.toastr.warning(`Problème serveur, les données sont fictives. Veuillez contacter l'admin`)
      }
    );
  }

  // emettre un event avec la personne que je viens de recevoir
  /*   forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  } */
}
