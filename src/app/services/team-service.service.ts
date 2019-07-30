import { CATEGORIES } from './../model/QuestionSource';
import { Category } from './../model/Category';
import { Question } from './../model/Question';
import { Injectable } from '@angular/core';
import { Team } from '../model/Team';


@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  teams: Team[];
  turn: number;
  numberOfQuestions = 0;
  categories: Category[];

  constructor() {
    this.init();
  }

  public init() {
    if (!!localStorage.getItem('teams')) {
      this.categories = JSON.parse(localStorage.getItem('categories'));
      for (const cat of this.categories) {
        for (const q of cat.questions) {
          this.numberOfQuestions += q.activated ? 1 : 0;
        }
      }
      this.teams = JSON.parse(localStorage.getItem('teams'));
      this.turn = +localStorage.getItem('turn');
    } else {
      this.reset();
    }
  }

  public reset() {
    this.teams = [new Team('Team A'), new Team('Team B')];
    this.turn = 0;
    this.categories = CATEGORIES;
    for (const cat of this.categories) {
      for (const q of cat.questions) {
        q.activated = true;
        this.numberOfQuestions += 1;
      }
    }
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('teams', JSON.stringify(this.teams));
    localStorage.setItem('turn', this.turn.toString());
  }

  private saveState() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('teams', JSON.stringify(this.teams));
    localStorage.setItem('turn', this.turn.toString());
  }

  public answer(question: Question) {
    const current = this.teams[this.turn];
    current.score += question.points;
    current.sugar -= question.points;
    if (this.turn === 0) {
      this.turn = 1;
    } else {
      this.turn = 0;
    }
    this.saveState();
  }

  public changeTurn() {
    if (this.turn === 0) {
      this.turn = 1;
    } else {
      this.turn = 0;
    }
    this.saveState();
  }

  getCurrentTeam(): Team {
    return this.teams[this.turn];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getTeams(): Team[] {
    return this.teams;
  }

  getNumberOfQuestions(): number {
    return this.numberOfQuestions;
  }
}
