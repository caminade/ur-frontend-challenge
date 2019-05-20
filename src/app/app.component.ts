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
  subscription: Subscription;
  constructor(private dataService: DataService, private repoService: RepoService) {
    this.dataService.getRepos();
  }
  ngOnInit() {
this.subscription = this.repoService.reposChanged
    .subscribe(
      (repos) => {
        this.repos = repos;
      }
    );
  this.repos = this.repoService.getRepos();
  

    }

/*onData(){
  this.subscription = this.repoService.reposChanged
    .subscribe(
      (repos) => {
        this.repos = repos;
      }
    );
  this.repos = this.repoService.getRepos();
  console.log(this.repos);
}*/



}

