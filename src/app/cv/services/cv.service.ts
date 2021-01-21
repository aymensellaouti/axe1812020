import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 12345, 38),
      new Personne(
        2,
        'sellaouti2',
        'aymen',
        'teacher',
        '          ',
        12345,
        39
      ),
      new Personne(3, 'sellaouti3', 'aymen', 'teacher', '', 12345, 38),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }

  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index !== -1) {
      this.personnes.splice(index, 1);
      return true;
    }
    return false;
  }
}
