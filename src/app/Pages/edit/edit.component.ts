import { Component, OnInit, ValueProvider } from '@angular/core';
import { ISurvey, IQuestion } from 'src/app/model/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fdw-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  index: number;
  survey: ISurvey;
  questions: IQuestion[];
  questionForms: FormGroup[] = [];
  nameForm: FormGroup;

  constructor(private route: ActivatedRoute, public surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('index');
      this.survey = this.surveyService.getSurvey(this.index);
      this.questions = [];
      this.nameForm = new FormGroup({
        name: new FormControl(this.survey.name),
        author: new FormControl(this.survey.author)
      });

      if(this.survey.questions.length > 0) {
        for (const question of this.survey.questions) {
          this.questionForms.push(new FormGroup({
            name: new FormControl(question.name),
            a0: new FormControl(question.ans[0].optionName),
            a1: new FormControl(question.ans[1].optionName),
            a2: new FormControl(question.ans[2].optionName),
            a3: new FormControl(question.ans[3].optionName)
          }));
        }
      } else {
        this.questionForms.push(new FormGroup({
          name: new FormControl(''),
          a0: new FormControl(''),
          a1: new FormControl(''),
          a2: new FormControl(''),
          a3: new FormControl('')
        }));
      }
    });
  }

  addQuestion() {
    this.questionForms.push(new FormGroup({
      name: new FormControl(''),
      a0: new FormControl(''),
      a1: new FormControl(''),
      a2: new FormControl(''),
      a3: new FormControl('')
    }));
  }

  deleteQuestion(index: number): void {
    this.questionForms.splice(index, 1);
  }

save(): void {
  for (const form of this.questionForms) {
    const question: IQuestion = {
      name: form.value.name,
      type: 1,
      ans: []
    };

    if (form.value.a0.value !== '') {
      question.ans.push({
        optionId: 0,
        optionName: form.value.a0,
      });
    }

    if (form.value.a1.value !== '') {
      question.ans.push({
        optionId: 1,
        optionName: form.value.a1,
      });
    }

    if (form.value.a2.value !== '') {
      question.ans.push({
        optionId: 2,
        optionName: form.value.a2,
      });
    }

    if (form.value.a3.value !== '') {
      question.ans.push({
        optionId: 3,
        optionName: form.value.a3,
      });
    }

    this.questions.push(question);
  }
  this.survey.name = this.nameForm.value.name;
  this.survey.author = this.nameForm.value.author;
  this.surveyService.addQuestionsToSurvey(this.index, this.questions);
  this.router.navigate(['surveylist']);
}
}
