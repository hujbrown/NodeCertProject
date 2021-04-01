import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INews } from '../shared/interfaces/news';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: []
})
export class NewsComponent implements OnInit {

  newsList : INews[] = []

  constructor(private news_service : NewsService, private router : Router) { }

  ngOnInit(): void {
    this.news_service.get_news().subscribe((res:any) => {
      this.newsList = res
    });
  }

  seeNews(article : INews){
  }
}
