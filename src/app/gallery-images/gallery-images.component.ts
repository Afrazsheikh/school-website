import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {

  config: SwiperOptions = {
    navigation: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
