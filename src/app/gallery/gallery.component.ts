import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
SwiperCore.use([Navigation]);


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  config: SwiperOptions = {
    navigation: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
