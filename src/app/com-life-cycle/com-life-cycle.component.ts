import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-com-life-cycle',
  templateUrl: './com-life-cycle.component.html',
  styleUrls: ['./com-life-cycle.component.css']
})
export class ComLifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input()  name: string;
  private verb = 'initialized';
  constructor() { }

  submit():void {
    console.log("submit");
  }
  ngOnChanges(changes:SimpleChanges):void {
    console.log('ngOnChanges');
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    console.log(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  ngOnInit() {
    console.log('ngOnInit');
    let is = this.name ? 'is' : 'is not';
    console.log(`name ${is} known at construction`);
  }

  ngDoCheck():void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked():void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit():void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked():void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy():void {
    console.log('ngOnDestroy');
  }
}
