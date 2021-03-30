import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INews } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  base_url: string = 'http://localhost:3000/api/newslist'
/*
  dummy_news: INews[] = [
    {
      title: 'A Heavily Armed Man at a Grocery Store Adds to Anxiety in Atlanta',
      description: 'Days after mass shootings in Atlanta and Boulder, Colo., a man carrying six weapons and wearing body armor was arrested at an Atlanta market. ',
      thumbnail_url: 'https://static01.nyt.com/images/2021/03/25/us/25atlanta/merlin_185529159_9ecc9cfa-7fe2-40c9-8258-c449f6039d0d-superJumbo.jpg?quality=90&auto=webp',
      article_url: 'https://www.nytimes.com/2021/03/25/us/atlanta-publix-arrest.html'
    },
    {
      title: 'What to Know About the Virus This Week',
      description: 'For more than two weeks, the United States has averaged between 54,000 and 59,000 new cases a day. Even as more people are vaccinated and deaths decline, parts of the country continue to see worrisome resurgences in cases. ',
      thumbnail_url: 'https://static01.nyt.com/images/2021/03/05/us/05virus-this-week-cases/05virus-this-week-cases-mediumThreeByTwo210.jpg?quality=100&auto=webp',
      article_url: 'https://www.nytimes.com/interactive/2021/03/26/us/virus-this-week.html'
    }
  ]
  */
  constructor(private http: HttpClient) { }




  get_news(): Observable<any> {
    return this.http.get(this.base_url)
    .pipe( map( (res:any ) => {
      return res;
    }));
    //return this.dummy_news
  }

}
