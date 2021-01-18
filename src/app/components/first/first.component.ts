import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  message = '';
  isHidden = false;
  color = 'yellow';
  constructor() {}
  toggle() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(element) {
    this.message = element;
  }
  ngOnInit(): void {}
}
