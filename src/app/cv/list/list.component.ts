import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardPersonneEvent = new EventEmitter();
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }

  // emettre un event avec la personne que je viens de recevoir
  forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  }
}
