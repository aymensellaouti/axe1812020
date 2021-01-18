import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() favoriteColor = 'red';
  name = 'fils';
  /*
  1- Créer un event
  2- Dire quand le déclencher
  3- Y mettre la data et l'envoyer
  */
  @Output() sendMessageToDad = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendMessage() {
    this.sendMessageToDad.emit('cc papa');
  }
}
