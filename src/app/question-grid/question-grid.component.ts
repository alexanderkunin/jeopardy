import { TeamService as TeamService } from '../services/team.service';
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

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.init();

    this.event.subscribe((question: number | Question) => {
      if (typeof question === 'number') {
        if (question === 0) {
          this.teamService.changeTurn();
        }
      } else {
        this.teamService.answer(question);
      }
      this.questionSelected = null;
      this.noOfQestions = this.teamService.getNumberOfQuestions();
    });
  }

  onSelect(question: Question) {
    if (question.activated) {
      this.questionSelected = question;
    }
  }

  currentTeam(): Team {
    return this.teamService.getCurrentTeam();
  }

  resetGame() {
    this.teamService.reset()
      .then(
        () => this.init()
      );
    ;
  }

  init() {
    this.questionSelected = null;
    this.noOfQestions = this.teamService.getNumberOfQuestions();
    this.teams = this.teamService.getTeams();
    const categories = this.teamService.getCategories();
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
    this.questionSelected = null;
    this.noOfQestions = 0;
  }
}
