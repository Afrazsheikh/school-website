import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faArrowLeft, faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
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
    library.addIcons(faEye, faArrowLeft, faArrowRight)
  }

  ngOnInit(): void {
    AOS.init();
  }
}
