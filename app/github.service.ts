import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
    //return this.http.get<User>(this.userUrl).().then();
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  //  return this.http.get<Repository[]> (this.userUrl + '/repos').Promise();
  }

  



 
    
}
