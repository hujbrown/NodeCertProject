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
  slicedList: INews[] = [];

  //newsList: any;


  constructor(private latestNewsService: LatestNewsService) { }

 
  ngOnInit(): void {

    this.latestNewsService.getNewsList()
    .subscribe( (res: INews[]) => { 
      console.log(res);
      this.newsList = res;
      console.log(res);
      this.slicedList = this.newsList.slice(0, 3);
    });
   

    
  }
  get sortedNews() {
    return this.newsList.sort((a, b) => {
      return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
    });
  }

}