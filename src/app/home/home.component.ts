import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {SwiperOptions, EffectFade, Pagination, Grid} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([EffectFade, Pagination, Grid]);

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

  config3: SwiperOptions = {
    slidesPerView: 4,
    grid: {
      rows: 2,
      fill: 'row'
    }
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiper2', { static: false }) swiper2?: SwiperComponent;
  @ViewChild('swiper3', {static: false}) swiper3?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
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

  slidePartNext(){
    this.swiper3?.swiperRef.slideNext(1000);
  }

  slidePartPrev(){
    this.swiper3?.swiperRef.slidePrev(1000);
  }

  scrollToSection2() {
    document.getElementById("section-steps")?.scrollIntoView();
  }
}
