import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    
  }
  //可以指定别名
  @Input('appHighlight') aliasHightlightColor:string;
  @Input() hightlightColor:string;
  @Input() defaultColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.hightlightColor || this.aliasHightlightColor || this.defaultColor);
    //this.highlight(this.aliasHightlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
