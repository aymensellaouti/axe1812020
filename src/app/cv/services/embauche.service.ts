import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne [] = [];
  constructor() {}

  getEmbauches(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): boolean {
    if (this.personnes.indexOf(personne) === -1 ) {
      this.personnes.push(personne);
      return true;
    }
    return false;
  }
}
