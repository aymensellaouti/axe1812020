import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (mesParams) => (this.defaultColor = mesParams.defaultColor)
    );
    this.activatedRoute.queryParams.subscribe((qp) => console.log(qp));
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}
