import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalizeFirstLetter]'
})
export class CapitalizeFirstLetterDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = this.el.nativeElement;
    const value = input.value;

    input.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
