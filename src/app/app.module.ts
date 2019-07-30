import { TeamServiceService } from './services/team-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionGridComponent } from './question-grid/question-grid.component';
import { QuestionViewerComponent } from './question-viewer/question-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionGridComponent,
    QuestionViewerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [TeamServiceService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
