import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../model/personne';

const PERSONNE_API_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  public selectItemSubject = new Subject<Personne>();
  constructor(private http: HttpClient) {
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

  getFakePersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(PERSONNE_API_LINK);
  }

  getFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(PERSONNE_API_LINK + id);
  }

  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index !== -1) {
      this.personnes.splice(index, 1);
      return true;
    }
    return false;
  }

  selectItem(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
}
