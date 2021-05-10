import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { LessonComponent } from './components/lesson/lesson/lesson.component';
import { LessonListComponent } from './components/lesson/lesson-list/lesson-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card/card.component';
import { FlashCardComponent } from './components/card/flash-card/flash-card/flash-card.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserSigninSignoutComponent } from './components/user/user-signin-signout/user-signin-signout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectComponent,
    LessonComponent,
    LessonListComponent,
    LoadingComponent,
    CardComponent,
    FlashCardComponent,
    UserLoginComponent,
    UserSigninSignoutComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
