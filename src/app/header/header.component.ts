/**父组件的值传给子组件 引入Input 子组件通过output执行父组件的方法*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  msg:string;

  @Input()
  run:any;
  title:string;

  //可执行父组件方法
  @Output()
  outter = new EventEmitter<string>();
  constructor() {
    this.title = "头部信息";
   }

  ngOnInit() {
  }

  search() {
    this.title = '改变';
    this.run();
  }

  sendParent() {
    this.outter.emit('msg at the header child');
  }
}
