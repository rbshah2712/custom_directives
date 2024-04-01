import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') OnMouseEnter(){
      this.bold('bold');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.bold('normal');
  }

  private bold(textdecoration:string){
    this.el.nativeElement.style.fontWeight = textdecoration;

  }
}
