import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  id:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(data=>this.id=data.id);
  }

}
