import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Personne } from './../model/personne';
import { TodoService } from './../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs/operators';
import { CvService } from '../services/cv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  nbClik = 0;
  constructor(
    private loggerService: LoggerService,
    private utilsService: UtilsService,
    private tostrService: ToastrService,
    private todoService: TodoService,
    private cvService: CvService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.cvService.selectItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => this.nbClik++);
    this.utilsService.sayHello();
    this.loggerService.logger('Je suis le cvComponent');
    this.tostrService.info('Bienvenu dans notre plateforme de gestion de CVs');
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data)=>console.log(data)
    );
  }
  /*   selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;

  } */
}
