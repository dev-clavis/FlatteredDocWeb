import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISurvey } from '../model/survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api = 'http://172.16.0.1:8001/';
  constructor(private httpClient: HttpClient) { }

  addSurvey(survey: ISurvey): Observable<{id: number}> {
    return this.httpClient.post<{id: number}>(this.api + 'update.php', survey);
  }

  getSurveys() {
    return this.httpClient.get(this.api + 'req-web.php');
  }

  getResults(id: number){
    return this.httpClient.get(this.api + 'statistics.php?id=' + id);
  }

  rmSurvey(id: number){
    this.httpClient.get(this.api + 'del.php?id=' + id).subscribe();
  }

}
