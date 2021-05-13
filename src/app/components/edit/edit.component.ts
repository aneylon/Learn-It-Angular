import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { Subject } from 'src/app/models/subject';
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

  constructor(
    private subjectService: SubjectService,
    private lessonService: LessonService
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
}