import { Category } from '../model/Category';
import { Question } from '../model/Question';
import { Injectable } from '@angular/core';
import { Team } from '../model/Team';
import { QuestionsService } from './questions.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Team[];
  turn: number;
  numberOfQuestions = 0;
  categories: Category[];

  constructor(private questionService: QuestionsService) {
    this.init();
  }

  private init() {
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

  public reset(): Promise<any> {
    const p = new Promise((resolve, reject) => {
      this.teams = [new Team('Team "Insulin"'), new Team('Team "Glucose"')];
      this.turn = 0;

      this.questionService.getQuestionsInCategories().subscribe((cats) => {
        this.numberOfQuestions = 0;
        this.categories = cats;
        for (const cat of this.categories) {
          for (const q of cat.questions) {
            q.activated = true;
            this.numberOfQuestions += 1;
          }
        }
        localStorage.setItem('categories', JSON.stringify(this.categories));
        localStorage.setItem('teams', JSON.stringify(this.teams));
        localStorage.setItem('turn', this.turn.toString());
        resolve(true);
      },
        error => reject());
    });

    return p;
  }

  private saveState() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('teams', JSON.stringify(this.teams));
    localStorage.setItem('turn', this.turn.toString());
  }

  public answer(question: Question) {
    const current = this.teams[this.turn];
    current.score += question.points;

    const sugar1 = current.sugar;

    if (current.sugar > 6) {
      current.sugar -= (question.points / 1000);
    } else {
      current.sugar -= (question.points / 1500);
    }

    const sugar2 = current.sugar;
    if (sugar1 >= 7 && sugar2 < 7) {
      current.congrats = true;
    } else {
      current.congrats = false;
    }

    if (this.turn === 0) {
      this.turn = 1;
    } else {
      this.turn = 0;
    }
    this.numberOfQuestions -= 1;
    this.saveState();
  }

  public changeTurn() {
    if (this.turn === 0) {
      this.turn = 1;
    } else {
      this.turn = 0;
    }
    this.numberOfQuestions -= 1;
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
