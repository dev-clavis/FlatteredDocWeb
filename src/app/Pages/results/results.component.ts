import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISurvey } from 'src/app/model/survey';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'fdw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

id:number;
results: ISurvey;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.httpService.getResults(this.id).subscribe((results: ISurvey) => {
        console.log(results);
        let questions = Object.keys(results.questions).map(key => results.questions[key]);
        this.results = results as ISurvey;
        this.results.questions = questions;
      });
    });
  }

}
