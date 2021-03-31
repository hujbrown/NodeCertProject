import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from './components/latest-news.service';
import { INews } from './latest-new';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})



export class LatestNewsComponent implements OnInit {

  pageName = 'News List';


  newsList: INews[] = [];


  constructor(private latestNewsService: LatestNewsService) { }

 
  ngOnInit(): void {

    this.latestNewsService.getThreeNews()
    .subscribe( (res: INews[]) => { 
      this.newsList = res;
    });
   

    
  }

}