import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
