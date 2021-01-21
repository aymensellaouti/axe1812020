import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  sliderObservable: Observable<string>;
  @Input() isRounded = true;
  @Input() size = 100;
  @Input() paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  constructor() {}

  ngOnInit(): void {
    this.sliderObservable = new Observable<string>((observer) => {
      let i = this.paths.length - 1;
      setInterval(() => {
        if (i < 0) {
          i = this.paths.length - 1;
        }
        observer.next(this.paths[i--]);
      }, 1000);
    });
  }
}
