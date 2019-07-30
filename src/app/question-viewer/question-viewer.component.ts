import { Question } from './../model/Question';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from '../model/Team';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit {
  @Input() question: Question;
  @Input() team: Team;
  @Input() event: Subject<number | Question>;

  constructor() { }

  ngOnInit() {
  }

  onYes() {
    this.question.activated = false;
    this.event.next(this.question);
    this.question = null;

  }

  onNo() {
    this.question.activated = false;
    this.event.next(0);
    this.question = null;
  }
}
