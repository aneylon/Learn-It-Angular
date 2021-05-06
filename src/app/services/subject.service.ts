import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from '../models/subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjectUrl: string = `${environment.apiUrl}/subject`

  constructor(
    private http: HttpClient
    ) { }

  public getSubjects(): Observable<Subject[]> {
    const result = this.http.get<Subject[]>(this.subjectUrl)
    return result
  }
}
