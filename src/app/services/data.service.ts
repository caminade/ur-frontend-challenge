import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {RepoService} from './repo.service';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  public repos;
  private _URL = 'https://api.github.com/search/repositories?q=created:2019-05-19&sort=stars&order=desc'; //using github api to retrieve the recently created repositories sorted by number of stars

  constructor(private http: HttpClient, private slrepo: RepoService) { }
  
    getRepos() {
    this.http.get<any>(this._URL, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (res) => {
          this.slrepo.setRepos(res['items']);
           // console.log(res['items']);
          return res['items'];
        }
      ))
      .subscribe();
  }
}
