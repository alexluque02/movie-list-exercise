import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRequestTokenResponse } from '../model/request-token.interface';
import { Observable } from 'rxjs';
import { CreateSessionResponse } from '../model/create-session.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getRequestToken(): Observable<GetRequestTokenResponse> {
    return this.http.get<GetRequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=78d6414b91baf8d0ca5de73fecb5b290`);
  }

  createSession(token: string): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(`${environment.apiBaseUrl}/authentication/session/new?api_key=78d6414b91baf8d0ca5de73fecb5b290`,
      {
        request_token: token
      });
  }
}
