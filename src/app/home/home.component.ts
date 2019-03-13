import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.content = "home";
  }

  goNews() {
    this.router.navigate(['/news']);
  }

  goNewscontent() {
    this.router.navigate(['/newscontent','3']);
  }

  goNewscontentExtra() {
    let navigationExtras: NavigationExtras 
    = { 
      queryParams: { 'session_id': '123' }, 
      fragment: 'anchor' };
    this.router.navigate(['/news'],navigationExtras);
  }
}
