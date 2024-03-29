import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'swiper/angular';
import { AdmissionComponent } from './admission/admission.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EquiryComponent } from './equiry/equiry.component';
import { CareersComponent } from './careers/careers.component';
import { StudcornerComponent } from './studcorner/studcorner.component';
import { FacilityComponent } from './facility/facility.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
// import { IgxDropDownModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    EquiryComponent,
    CareersComponent,
    StudcornerComponent,
    FacilityComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
    // IgxDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
