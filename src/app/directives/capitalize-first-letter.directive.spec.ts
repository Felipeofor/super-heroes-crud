import { ElementRef } from '@angular/core';
import { CapitalizeFirstLetterDirective } from './capitalize-first-letter.directive';

describe('CapitalizeFirstLetterDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('div'));
    const directive = new CapitalizeFirstLetterDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
