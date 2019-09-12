import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {RepoService} from './repo.service';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  public repos;
  private _URL = 'https://api.github.com/search/repositories?q=created:>2019-08-012&sort=stars&order=desc&per_page=100'; //using github api to retrieve the recently created repositories sorted by number of stars

  constructor(private http: HttpClient, private slrepo: RepoService) { }
  
    getURL(page: number)  //instead of using _URL we define a method to increment the pages number when scrolling down
    {  
        return 'https://api.github.com/search/repositories?q=created:>2019-08-12&sort=stars&order=desc&page='+page;  
    }  
//    getRepos() {           //Return 100 results without pagination
//    this.http.get<any>(this._URL, {
//      observe: 'body',
//      responseType: 'json'
//    })
//      .pipe(map(
//        (res) => {
//          this.slrepo.setRepos(res['items']);
//            console.log(res['items']);
//          return res['items'];
//        }
//      ))
//      .subscribe();
//  }
     getRepos(page: number) {                       // Return 30 results page by page - with pagination
    this.http.get<any>(this.getURL(page), {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (res) => {
          this.slrepo.setRepos(res['items']);
            console.log(res['items']);
          return res['items'];
        }
      ))
      .subscribe();
  }
}
