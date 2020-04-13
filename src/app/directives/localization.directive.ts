import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Directive({
  selector: '[appLocalization]'
})
export class LocalizationDirective implements OnInit{

  @Input('appLocalization') key: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // Use renderer to render the emelemt with styles
    this.elementRef.nativeElement.innerText = Constants[this.key];
  }

}
