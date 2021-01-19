import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private loggerService: LoggerService) {}
  sayHello() {
    this.loggerService.logger('cc');
  }
}
