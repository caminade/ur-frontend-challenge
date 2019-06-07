import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from './services/data.service';
import {RepoService} from './services/repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'github-webchallenge';
  repos = [];
    repos_list = [];
    page = 1;
  subscription: Subscription;
  constructor(private dataService: DataService, private repoService: RepoService) {
    this.dataService.getRepos(this.page);
  }
  ngOnInit() {
this.subscription = this.repoService.reposChanged
    .subscribe(
      (repos) => {
        this.repos = repos;
            this.repos.forEach(el => {      //For pagination purpose, we create a list of repos to be displayed
                this.repos_list.push(el); 
                                });
      }
    );

    }
onScroll() {
    //console.log('scrolled!!');
    this.page = this.page + 1;  //on scrolling down we increment the pages to be displayed, this will affect the url of the API
    this.dataService.getRepos(this.page);
  }
}

