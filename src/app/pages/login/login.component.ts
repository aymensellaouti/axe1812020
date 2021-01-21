import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  login(loginForm) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toastr.success('Bienvenu chez vous :)');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toastr.error('Veuillez vérifier vos crédentials');
      }
    );
  }
}
