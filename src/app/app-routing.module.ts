import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { EditComponent } from './Pages/edit/edit.component';
import { SurveylistComponent } from './Pages/surveylist/surveylist.component';
import { ResultsComponent } from './pages/results/results.component';
import { QrcreateComponent } from './Pages/qrcreate/qrcreate.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'edit/:index', component: EditComponent},
  {path: 'surveylist', component: SurveylistComponent},
  {path: 'results/:id', component: ResultsComponent},
  {path: 'qrcreate/:id', component: QrcreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
