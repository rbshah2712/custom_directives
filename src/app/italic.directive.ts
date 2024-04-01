import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') OnMouseEnter(){
      this.italic('italic');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.italic('normal');
  }

  private italic(textdecoration1:string){
    this.el.nativeElement.style.fontStyle = textdecoration1;

  }

}
