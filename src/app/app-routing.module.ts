import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admission', component: AdmissionComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
