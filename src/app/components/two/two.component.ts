import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  two = 'contenu de two';
  constructor() {}

  ngOnInit(): void {}
  changeTwo() {
    this.two = 'new Value';
  }
}
