import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css'],
})
export class TestNgStyleComponent implements OnInit {
  @Input() bg = 'lightblue';
  @Input() color = 'green';
  font = 'verdana';
  test = true;
  constructor() {}

  ngOnInit(): void {}
}
