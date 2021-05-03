import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  @Input() subjectId: number
  lessons: Lesson[]

  constructor(
    private lessonService: LessonService
  ) { }

  ngOnInit(): void {
    this.getLessons(this.subjectId)
  }

  public getLessons(subjectId: number): void {
    console.log('getting lessons', subjectId)
    this.lessonService.getLessons(subjectId)
      .subscribe(lessons => {
        console.log('got lessons', lessons)
        this.lessons = lessons
      })
  }

}
