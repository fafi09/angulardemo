import { Injectable } from '@angular/core';
import { AdItem } from "../ad-item";
import { HeroJobAdComponentComponent } from "../hero-job-ad-component/hero-job-ad-component.component";
import { HeroProfileComponentComponent } from "../hero-profile-component/hero-profile-component.component";
@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor() { }

  getAds() {
    return [new AdItem(HeroProfileComponentComponent, { name: 'profile name1', bio: 'profile bio1' }),
    new AdItem(HeroProfileComponentComponent, { name: 'profile name2', bio: 'profile bio2' }),
    new AdItem(HeroJobAdComponentComponent, { headline: 'jobad headline1', body: 'jobad body1' }),
    new AdItem(HeroJobAdComponentComponent, { headline: 'jobad headline2', body: 'jobad body2' })];
  }
}
