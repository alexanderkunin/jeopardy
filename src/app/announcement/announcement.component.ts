import { Team } from './../model/Team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() teams: Team[];
  winningTeam: Team;

  constructor() { }

  ngOnInit() {
    if (this.teams[0].score < this.teams[1].score) {
      this.winningTeam = this.teams[0];
    } else if (this.teams[0].score > this.teams[1].score) {
      this.winningTeam = this.teams[1];
    } else {
      this.winningTeam = null;
    }
  }
}
