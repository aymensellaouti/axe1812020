import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LOGIN_API = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(crededntials): Observable<any> {
    return this.http.post<any>(LOGIN_API, crededntials);
  }

  isAutheenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
  }
}
