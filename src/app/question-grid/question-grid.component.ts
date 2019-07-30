import { TeamServiceService } from './../services/team-service.service';
import { Subject } from 'rxjs';
import { Question } from './../model/Question';
import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';

@Component({
  selector: 'app-question-grid',
  templateUrl: './question-grid.component.html',
  styleUrls: ['./question-grid.component.scss']
})
export class QuestionGridComponent implements OnInit {
  questionSelected: Question;
  noOfQestions: number;
  questions: Question[][] = new Array<Array<Question>>();
  teams: Team[];
  event = new Subject<Question>();

  constructor(private teamServiceService: TeamServiceService) { }

  ngOnInit() {
    this.init();

    this.event.subscribe((question: number | Question) => {
      if (typeof question === 'number') {
        if (question === 0) {
          this.teamServiceService.changeTurn();
        }
      } else {
        this.teamServiceService.answer(question);
      }
      this.questionSelected = null;
      this.noOfQestions = this.teamServiceService.getNumberOfQuestions();
    });
  }

  onSelect(question: Question) {
    if (question.activated) {
      this.questionSelected = question;
    }
  }

  currentTeam(): Team {
    return this.teamServiceService.getCurrentTeam();
  }

  resetGame() {
    this.teamServiceService.reset();
    this.init();
  }

  init() {
    this.questionSelected = null;
    this.noOfQestions = this.teamServiceService.getNumberOfQuestions();
    this.teams = this.teamServiceService.getTeams();
    const categories = this.teamServiceService.getCategories();
    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i];
      for (let j = 0; j < cat.questions.length; j++) {
        if (!this.questions[j]) {
          this.questions[j] = new Array<Question>();
        }
        const question = cat.questions[j];
        this.questions[j][i] = question;
      }
    }
  }

  completeGame() {
    this.noOfQestions = 0;
  }
}
