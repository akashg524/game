import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {

  isStarted:boolean;
  GameComponent:string="game";
  ScoreComponent:string="scoreboard";
  constructor() { }
  hide()
  {
    this.isStarted=!this.isStarted;
    console.log(this.isStarted);
  }
  ngOnInit() {
    this.isStarted=true;
  }

}
