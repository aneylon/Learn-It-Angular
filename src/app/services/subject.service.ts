import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from '../models/subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url = 'https://learn-it-api.herokuapp.com/subject'

  constructor(
    private http: HttpClient
    ) { }

  public getSubjects(): Observable<Subject[]> {
    const result = this.http.get<Subject[]>(this.url)
    console.log(result)
    return result
  }

  // getSubject
  // addSubject
  // removeSubject

}
