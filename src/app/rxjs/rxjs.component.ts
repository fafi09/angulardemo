import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { tap, delay, map, take } from "rxjs/operators";
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testpipe() { 
    let result:Observable<number[]>
      //= of([1,2,3]).pipe(delay(2000), tap(val => console.log(Date.now()  + ':tap:'+val)));
      = of([1,2,3]).pipe(delay(2000), tap(val => map(v => '2' + v)));
    result.subscribe(val => console.log(Date.now()  + ':' + val));
    let result1:Observable<number>
      = of(1,2,3).pipe(
        take(2),
        tap(val => console.log('before:'+val)),
        map(v => v + 10),
        tap(val => console.log('after:'+val)));
    result1.subscribe(val => console.log(val));
  }
}
