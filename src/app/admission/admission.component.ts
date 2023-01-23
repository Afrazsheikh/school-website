import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  readMore: number = 0;

  constructor() {}

  ngOnInit(): void {
  }


}

