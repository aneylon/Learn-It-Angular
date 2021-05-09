import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = `${environment.apiUrl}/user`

  constructor(
    private http: HttpClient
  ) { }

  public login(userLogin: UserLogin): Observable<User> {
    const result = this.http.post<User>(`${this.userUrl}/login`, userLogin)
    return result
  }

  public logout(user: User): Observable<User> {
    const result = this.http.post<User>(`${this.userUrl}/logout`, user)
    return result
  }

  public newUser(user: User): Observable<User> {
    const result = this.http.put<User>(`${this.userUrl}/newUser`, user)
    return result
  }
}
