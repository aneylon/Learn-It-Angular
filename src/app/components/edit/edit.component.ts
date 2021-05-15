import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Lesson } from 'src/app/models/lesson';
import { Subject } from 'src/app/models/subject';
import { CardService } from 'src/app/services/card.service';
import { LessonService } from 'src/app/services/lesson.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  subjects: Subject[]
  lessons: Lesson[]
  private emptyCard = new Card(0,'','','')
  newCard: Card = this.emptyCard
  formSubmitted: boolean = false

  constructor(
    private subjectService: SubjectService,
    private lessonService: LessonService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.subjectService.getSubjects()
      .subscribe(subjects => {
        this.subjects = subjects
      })
  }

  changeSubject(e: any):void {
    this.getLessons(e.target.value)
  }

  getLessons(lessonId: number) : void {
    this.lessonService.getLessons(lessonId)
      .subscribe(lessons => {
        console.log(lessons)
        this.lessons = lessons
      })
  }

  submitNewCard(newCard: Card): void {
    console.log('add card', this.newCard)
    this.cardService.addNewCard(this.newCard)
      .subscribe(result => {
        console.log('got back', result)
      })
    
  }
}