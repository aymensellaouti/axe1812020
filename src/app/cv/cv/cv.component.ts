import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Personne } from './../model/personne';
import { TodoService } from './../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService,
    private utilsService: UtilsService,
    private tostrService: ToastrService,
    private todoService: TodoService,
  ) {}
  ngOnInit(): void {
    this.utilsService.sayHello();
    this.loggerService.logger('Je suis le cvComponent');
    this.tostrService.info('Bienvenu dans notre plateforme de gestion de CVs');

  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
    /* this.todoService.loggerTodo(); */
  }
}
