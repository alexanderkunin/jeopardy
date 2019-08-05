import { Component } from '@angular/core';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jeopardy';

  constructor(private teamServiceService: TeamService) {
  }
}
