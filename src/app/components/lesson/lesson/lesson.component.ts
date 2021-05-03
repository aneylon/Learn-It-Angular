import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson
  constructor() { }

  ngOnInit(): void {
  }
  selectLesson(lessonId: number): void {
    console.log('selected lesson', lessonId)
  }
}
