import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private tostr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getPersonneById(+params.id).subscribe(
        (personne) => this.personne = personne,
        (erreur) => this.router.navigate(['cv'])
      );
    });
  }

  delete() {
    this.cvService.deletePersonne(this.personne);
    this.tostr.success(`${this.personne.name} supprimé avec succès`);
    this.router.navigate(['cv']);
  }
}
