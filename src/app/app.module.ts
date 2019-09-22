import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { EditComponent } from './Pages/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SurveylistComponent } from './Pages/surveylist/surveylist.component';
import { QrcreateComponent } from './Pages/qrcreate/qrcreate.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SurveyService } from './services/survey.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ResultsComponent } from './pages/results/results.component';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    SurveylistComponent,
    QrcreateComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [
    SurveyService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
