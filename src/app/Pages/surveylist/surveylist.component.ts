import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'fdw-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {

  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
  }

  addSurvey(){
    this.surveyService.addSurvey();
  }

  removeSurvey(index: number){
    this.surveyService.removeSurvey(index);
  }

}
