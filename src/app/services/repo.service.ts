
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private repos = [];
  reposChanged = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  setRepos(repositories) {
    this.repos = repositories;
    this.reposChanged.next(this.repos.slice());
  }
  getRepos() {
      return this.repos.slice();
  }
}
