import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { FilterPipe} from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
