import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class AdDirectiveDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
