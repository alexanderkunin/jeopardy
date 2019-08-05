import { QuestionsService } from './services/questions.service';
import { TeamService } from './services/team.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionGridComponent } from './question-grid/question-grid.component';
import { QuestionViewerComponent } from './question-viewer/question-viewer.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionGridComponent,
    QuestionViewerComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
