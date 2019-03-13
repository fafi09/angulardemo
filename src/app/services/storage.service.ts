import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { map , catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //数组必须初始化为[],否则报错push未定义
  list:string[] = [];
  titles:string[] = [];
  retData:object;
  constructor(private http:HttpClient) { }

  addData(data:string) {
    this.list.push(data);
  }

  getData():string[] {
    return this.list;
  }

  getTitles():string[] {
    let Tthat = this;
    this.http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1').subscribe(
      function(data) { 
        let result = data['result'];
        ///console.log(result);
        for(let i = 0; i < result.length; i++) {
          // console.log(result[i].title);
          // this.titles.push(result[i].title);
          console.log(result[i].title);
          Tthat.titles.push(result[i].title);
          //console.log(jObj.title);
        }
      },
      function(err){ console.log('failed')}
    );

    return this.titles;
  }

  getJsonpTitles():string[] {
    let Tthat = this;
    this.http.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK','').subscribe(
      function(data) { 
        let result = data['result'];
        //console.log(data);
        //console.log(result[0].title);
        for(let i = 0; i < result.length; i++) {
          Tthat.titles.push(result[i].title);
        }
      },
      function(err){ console.log('failed')}
    );
    return this.titles;
  }

  postTitle(newscomp) {
    let Tthat = this;
    this.http.post('http://localhost:8001/test',JSON.stringify({'username':'admin','pass':'12345'}),httpOptions).subscribe(
      function(data) {
        console.log(data);
        Tthat.retData = data;
        newscomp.username = data['username'];
        newscomp.pass = data['pass'];
        console.log(data['username']);
      },
      function(err){
        console.log(err);
      }
    );
  }

  getTitlesRxjs(newscomp) {
    this.http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
    .pipe(map(res => res), catchError(error => {
      return '.....';
      }))
    .subscribe(function(data){
      console.log(data);
    });
  }
}
