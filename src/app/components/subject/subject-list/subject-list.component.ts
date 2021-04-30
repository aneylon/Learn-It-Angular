import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects = [
    {
      id: 1,
      title: 'One',
      subTitle: '1'
    },
    {
      id: 2,
      title: 'Two',
      subTitle: '2'
    },
    {
      id: 3,
      title: 'Three',
      subTitle: '3'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
