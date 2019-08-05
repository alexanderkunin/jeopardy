import { Category } from '../model/Category';
import { Question } from '../model/Question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestionsInCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('./assets/data/questions.json');
  }

}
