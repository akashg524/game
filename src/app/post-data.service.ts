import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http1: HttpClient, ) { }
  postData(userData: any) {
    this.http1.post('http://localhost:3000/gamedata', userData)
      .subscribe(
        data => { console.log('POST request is successful', data); },
        error => { console.log('Error', error); }
      );
  }
}
