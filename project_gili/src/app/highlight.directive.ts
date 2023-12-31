import { Directive, ElementRef,HostListener} from '@angular/core';
  
@Directive
  ({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
      constructor(private el: ElementRef) {
         this.el.nativeElement.style.backgroundColor = 'pink';
      }
@HostListener
('mouseenter') onMouseEnter() {
  this.highlight('pink');
}

@HostListener
('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
  }
