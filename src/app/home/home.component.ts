import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {SwiperOptions, EffectFade} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(1000);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(1000);
  }

}
