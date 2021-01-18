import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
    </p>
  `,
  styles: ['p {background-color: yellow;}']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
