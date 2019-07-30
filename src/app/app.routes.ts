import { Routes } from '@angular/router';
import { QuestionGridComponent } from './question-grid/question-grid.component';

export const ROUTES: Routes = [
  { path: '**', component: QuestionGridComponent },
];
