/**引入ViewChild */
import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FooterComponent } from '../footer/footer.component';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  msg:string;
  content:string;
  list:string[];
  titles:string[];
  
  username:string;
  pass:string;

  @ViewChild('footer') footer;

  constructor(private storage: StorageService, private route: ActivatedRoute) {
    console.log(this.route.queryParams);
   }

  ngOnInit() {
    this.msg = "news msg父组件";
    this.content = "news";
    this.list = ['china','usa','es','jp','korean'];
  }

  onkeyup(e) {
    if(e.keyCode == 13) {
      alert('write complete');
    }
  }

  addContent() {
    //alert(this.content);
    this.storage.addData(this.content);
    //this.list.push(this.content);
    //alert('end');
    this.list = this.storage.getData();
  }

  searchTitle() {
    this.titles  = this.storage.getTitles();
  }

  searchJsonpTitle() {
    this.titles = this.storage.getJsonpTitles();
  }

  postTitle() {
    this.storage.postTitle(this);
    
    //console.log(tt['username']);
    //var jsonObject = JSON.parse(this.storage.postTitle());
    //this.username = jsonObject.username;
    //this.pass = jsonObject.pass;
  }

  getTitlesRxjs() {
    this.storage.getTitlesRxjs(this);
  }

  run() {
    alert('父组件的run方法');
  }

  //接收子组件传递过来的数据 
  runParent(msg:string){
    console.log(msg);
     alert(msg); 
  }

  runFooter() {
    this.footer.footerRun();
  }
}
