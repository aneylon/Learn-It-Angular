import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../models/lesson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  lessonUrl: string = `${environment.apiUrl}/lesson`
  constructor(
    private http: HttpClient
  ) { }

  public getLessons(subjectId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`this.lessonUrl/${subjectId}`)
  }
}
