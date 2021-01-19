import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(public el: ElementRef) {
    console.log(el);
  }
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bc = this.out;

  @HostListener('mouseenter') onMouseEnter() {
    this.bc = this.in;
    this.el.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bc = this.out;
    this.el.nativeElement.innerHTML = 'out';
  }
}
