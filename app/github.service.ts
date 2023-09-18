import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from
'../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<User> {
    curruser:Observable<User> ;
    // const curruser=this.http.get<User>(`${environment.apiUrl}/
    // ${environment.username}`);
    
    return this.http.get<User>(`${environment.apiUrl}/
    ${environment.username}`);
    }
}
