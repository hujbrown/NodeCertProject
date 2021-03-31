import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INews } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  base_url: string = 'http://localhost:3000/api/newsList'

  constructor(private http: HttpClient) { }




  get_news(): Observable<any> {
    return this.http.get(this.base_url)
    .pipe( map( (res:any ) => {
      return res;
    }));
  }

}
