import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faArrowDown, faArrowLeft, faArrowRight, faEye, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'school-website';

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faEye, faArrowLeft, faArrowRight, faArrowDown, faPlay)
  }

  ngOnInit(): void {
    AOS.init();
  }
}
