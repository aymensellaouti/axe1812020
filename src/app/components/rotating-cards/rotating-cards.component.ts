import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-cards',
  templateUrl: './rotating-cards.component.html',
  styleUrls: ['./rotating-cards.component.css']
})
export class RotatingCardsComponent implements OnInit {

  name = 'sellaouti';
  firstname = 'aymen';
  job = 'teacher';
  path = 'rotating_card_profile3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
