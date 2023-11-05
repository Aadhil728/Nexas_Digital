import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SceduleSectionComponent } from './components/scedule-section/scedule-section.component';
import { StartSectionComponent } from './components/start-section/start-section.component';
import { StartFunFactsSectionComponent } from './components/start-fun-facts-section/start-fun-facts-section.component';
import { WhyChooseUsSectionComponent } from './components/why-choose-us-section/why-choose-us-section.component';
import { CallToActionSectionComponent } from './components/call-to-action-section/call-to-action-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { PricingTableSectionComponent } from './components/pricing-table-section/pricing-table-section.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { NewsLetterSectionComponent } from './components/news-letter-section/news-letter-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    SceduleSectionComponent,
    StartSectionComponent,
    StartFunFactsSectionComponent,
    WhyChooseUsSectionComponent,
    CallToActionSectionComponent,
    ServiceSectionComponent,
    PricingTableSectionComponent,
    BlogSectionComponent,
    NewsLetterSectionComponent,
    FooterComponent,
    ContactUsSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
