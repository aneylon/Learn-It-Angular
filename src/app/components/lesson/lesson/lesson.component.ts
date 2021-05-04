import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson
  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
  }
  selectLesson(lessonId: number): void {
    console.log('selected lesson', lessonId)
    this.cardService.selectDeck(lessonId)
  }

}
