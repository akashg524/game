import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-score-component',
  templateUrl: './score-component.component.html',
  styleUrls: ['./score-component.component.css']
})
export class ScoreComponentComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/gamedata')
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
  }

  ngOnInit() {
  }

}
