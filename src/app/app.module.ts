import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { StorageService } from './services/storage.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { NewsAuthorComponent } from './news-author/news-author.component';
import { HighlightDirective } from './highlight.directive';
import { ComLifeCycleComponent } from './com-life-cycle/com-life-cycle.component';
import { AdDirectiveDirective } from './ad-directive/ad-directive.directive';
import { AdBannerComponentComponent } from './ad-banner-component/ad-banner-component.component';
import { HeroJobAdComponentComponent } from './hero-job-ad-component/hero-job-ad-component.component';
import { HeroProfileComponentComponent } from './hero-profile-component/hero-profile-component.component';
import { AdServiceService } from "./ad-service/ad-service.service";
import { PopupComponent } from './popup/popup.component';
import { PopupService } from "./popup/popup.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    FooterComponent,
    NewscontentComponent,
    NewsdetailComponent,
    NewsAuthorComponent,
    HighlightDirective,
    ComLifeCycleComponent,
    AdDirectiveDirective,
    AdBannerComponentComponent,
    HeroJobAdComponentComponent,
    HeroProfileComponentComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [StorageService,AdServiceService,PopupService],
  bootstrap: [AppComponent],
  entryComponents: [HeroProfileComponentComponent,HeroJobAdComponentComponent, PopupComponent]
})
export class AppModule { }
