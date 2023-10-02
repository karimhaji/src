import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {
  repos$: Observable<Repository[]> | undefined;
  constructor(private githubService: GithubService) { }
  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos();
  
    this.repos$ = this.repos$.pipe(
    map(repos => repos.filter(repo => !repo.fork))    );

    // this.repos$ = this.githubService.getRepos().pipe(
    //   map(repos => repos.filter(repo => !repo.fork)));

    }
}
