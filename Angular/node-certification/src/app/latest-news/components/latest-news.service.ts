import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {


  constructor(private http: HttpClient) { }
 
getNewsList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/newslist')
      .pipe(map((res: any) => {
        console.log(res);
        console.log('inside service')

        return res;
      }));


    }}
