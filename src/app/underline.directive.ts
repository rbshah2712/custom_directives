import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') OnMouseEnter(){
      this.underline('underline');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.underline('normal');
    this.el.nativeElement.style.color = '';

  }

  private underline(textdecoration1:string){
    this.el.nativeElement.style.textdecoration = textdecoration1;
    this.el.nativeElement.style.color = 'red';
  }

}
