import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  msg:string;
  
  constructor() { }

  ngOnInit() {
  }

  footerRun() {
    alert("this is footer child component run method.")
  }

}
