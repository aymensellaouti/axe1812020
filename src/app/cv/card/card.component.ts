import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Personne } from './../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService,
    private tostService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject.subscribe(
      (personne) => (this.personne = personne)
    );
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.personne)) {
      this.tostService.success(`
        ${this.personne.name} a été embauché avec succès
      `);
    } else {
      this.tostService.warning(`
        ${this.personne.name} est déjà embauché
      `);
    }
  }
  details() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
