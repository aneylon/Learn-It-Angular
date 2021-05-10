import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input() subject
  showLessonList: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleLessonList(): void {
    this.showLessonList = !this.showLessonList
  }
}
