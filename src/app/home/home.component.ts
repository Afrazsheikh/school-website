import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {SwiperOptions, EffectFade, Pagination} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

SwiperCore.use([EffectFade, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {crossFade: true},
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  config2: SwiperOptions = {
    direction: 'vertical',
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {crossFade: true},
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiper2', { static: false }) swiper2?: SwiperComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.testURL();
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(1000);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(1000);
  }

  slideEduNext(){
    this.swiper2?.swiperRef.slideNext(1000);
  }
  slideEduPrev(){
    this.swiper2?.swiperRef.slidePrev(1000);
  }

  testURL()
  {
    const httpHeaders = new HttpHeaders({});

    const options = {
      headers: httpHeaders
    }

    this.http.get("https://restaurant-cms-application.herokuapp.com/v1/userService/about-us/63a19d3d27a57d8a6d2e4408")
    .subscribe(() => {},
    (err) => {console.error(err)});
  }

}
