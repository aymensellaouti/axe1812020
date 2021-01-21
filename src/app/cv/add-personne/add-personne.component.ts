import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addPersonne(formumaire) {
    this.cvService.addPersonne(formumaire.value).subscribe(
      (personne) => {
        this.toastr.success(
          `${personne.firstname} ${personne.name} a été ajouté avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur) => this.toastr.error(`Veuillez contacter l'admin`)
    );
  }
}
