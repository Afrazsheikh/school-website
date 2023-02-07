import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss','../equiry/equiry.component.scss']
})
export class CareersComponent implements OnInit {

  schoolData: any;
  environment = environment;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData()
  {
    this.apiService.getSchoolData('careers').subscribe((resp) => {
      this.schoolData = resp.schoolData.careers;
      console.log(this.schoolData);
    },
    (err) => {
      console.error(err);
    });
  }

}
