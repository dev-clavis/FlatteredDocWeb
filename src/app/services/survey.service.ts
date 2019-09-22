import { Injectable } from '@angular/core';
import { ISurvey, IQuestion } from '../model/survey';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private surveyList: ISurvey[] = [];
  constructor(private httpService: HttpService) {
    this.httpService.getSurveys().subscribe(data => {
      this.surveyList = data as ISurvey[];
    });
  }

  getSurveyList(): ISurvey[]{
    return this.surveyList;
  }

  addSurvey(): void{
    let length: number = this.surveyList.length;
    this.surveyList.push({name: 'New Survey ' + (length + 1)});
  }

  removeSurvey(index: number): void{
    const survey = this.surveyList[index];
    console.log(survey.id);
    this.httpService.rmSurvey(survey.id);
    this.surveyList.splice(index, 1);
  }

  getSurvey(index: number): ISurvey{
    return this.surveyList[index];
  }

  addQuestionsToSurvey(index: number, questions: IQuestion[]): void {
    const survey = this.surveyList[index];
    survey.questions = questions;
    console.log(survey);
    this.httpService.addSurvey(survey).subscribe(data => {
      survey.id = data.id;
    });
  }



}
