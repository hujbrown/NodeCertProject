import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INews } from '../shared/interfaces/news';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList : INews[] = []

  constructor(private news_service : NewsService, private router : Router) { }

  ngOnInit(): void {
    this.newsList = this.news_service.get_news()
  }

  seeNews(article : INews){
  }
}
