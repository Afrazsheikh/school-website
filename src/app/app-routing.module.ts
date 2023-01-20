import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { EquiryComponent } from './equiry/equiry.component';
import { FacilityComponent } from './facility/facility.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { StudcornerComponent } from './studcorner/studcorner.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admission', component: AdmissionComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'equiry', component: EquiryComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'students-corner', component: StudcornerComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'AboutUS', component: AboutUsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
