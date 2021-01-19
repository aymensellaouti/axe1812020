import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardPersonneEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 12345, 38),
      new Personne(
        2,
        'sellaouti2',
        'aymen',
        'teacher',
        'rotating_card_profile.png',
        12345,
        39
      ),
      new Personne(
        3,
        'sellaouti3',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        12345,
        38
      ),
    ];
  }

  // emettre un event avec la personne que je viens de recevoir
  forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  }
}
