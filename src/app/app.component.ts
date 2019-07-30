import { Component } from '@angular/core';
import { TeamServiceService } from './services/team-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jeopardy';

  constructor(private teamServiceService: TeamServiceService) {
  }
}
