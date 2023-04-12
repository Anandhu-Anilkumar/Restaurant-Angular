import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ArticleComponent } from './article/article.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BigDealsComponent } from './big-deals/big-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    ArticleComponent,
    OurServicesComponent,
    BigDealsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
