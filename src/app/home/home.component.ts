import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { AdItem } from "../ad-item";
import { AdServiceService } from "../ad-service/ad-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;
  ads: AdItem[];
  constructor(private router: Router, private adService: AdServiceService) { }

  ngOnInit() {
    this.content = "home";
    this.ads = this.adService.getAds();
  }

  changeContent() {
    this.content = "ddddd";
  }

  goNews() {
    this.router.navigate(['/news']);
  }

  goNewscontent() {
    this.router.navigate(['/newscontent', '3']);
  }

  goNewscontentExtra() {
    let navigationExtras: NavigationExtras
      = {
      queryParams: { 'session_id': '123' },
      fragment: 'anchor'
    };
    this.router.navigate(['/news'], navigationExtras);
  }
}
