import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { LessonComponent } from './components/lesson/lesson/lesson.component';
import { LessonListComponent } from './components/lesson/lesson-list/lesson-list.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectComponent,
    LessonComponent,
    LessonListComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
