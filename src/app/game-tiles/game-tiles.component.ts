import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LandingComponentComponent } from '../landing-component/landing-component.component';
import { AppComponent } from '../app.component';
import { StartGameServiceService } from '../start-game-service.service';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import {Router} from '@angular/router'
@Component({
  providers: [LandingComponentComponent],
  selector: 'app-game-tiles',
  templateUrl: './game-tiles.component.html',
  styleUrls: ['./game-tiles.component.css']
})
export class GameTilesComponent implements OnInit {
  userData = {
    uid:'',
    score:0
  };
  correctAns: number = 0;
  temp: any;
  isDisabled: boolean = true;
  lastNum: number = 0;
  StartGame: boolean = true;
  @ViewChild("box_1") box_1: ElementRef;
  @ViewChild("box_2") box_2: ElementRef;
  @ViewChild("box_3") box_3: ElementRef;
  @ViewChild("box_4") box_4: ElementRef;
  constructor(private Score: AppComponent, private st: StartGameServiceService, private http1:HttpClient,private router:Router) { }
  changeColor() {
    let color = Math.floor(Math.random() * 4) + 1;
    while (color === this.lastNum) {
      color = Math.floor(Math.random() * 4) + 1;
    }
    this.lastNum = color;
    switch (color) {
      case 1: this.box_1.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.isDisabled = false;
        console.log(color);
        break;
      case 2: this.box_2.nativeElement.classList.add("red");
        this.box_1.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.isDisabled = false;
        console.log(color);
        break;
      case 3: this.box_3.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_1.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.isDisabled = false;
        console.log(color);
        break;
      case 4: this.box_4.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_1.nativeElement.classList.remove("red");
        this.isDisabled = false;
        console.log(color);
        break;
    }
  }
  Game() {
    this.StartGame = !this.StartGame;
  }
  onStart() {
    this.Score.score = 0;
    this.temp = this.st.Start();
    this.temp.subscribe(() => this.changeColor());
  }
  onFinish() {
    this.userData.score=this.Score.score;
    this.userData.uid=uuid();
    this.isDisabled = true;
    console.log("your final Score is " + this.Score.score);
    this.http1.post('http://localhost:3000/gamedata',this.userData)
    .subscribe(
      data=>{console.log("POST request is successful",data);},
      error=>{console.log("Error",error);}
    );
    this.router.navigate(['scoreboard']);
  }
  trackScore($event: any) {
    if ($event.target.classList.contains('red')) {
      this.correctAns = this.correctAns + 1;
      this.Score.score = this.Score.score + 5;
      if (this.correctAns === 3  ) {
        this.temp.pipe(switchMap(() => interval(1000)));
        this.temp.subscribe(() => this.changeColor());
        console.log("switchMap Triggered");
      }
      this.isDisabled = true;
      console.log("your score is " + this.Score.score + " right now");
    }
    else {
      this.Score.score = this.Score.score - 3;
      this.isDisabled = true;
      console.log("your score is " + this.Score.score + " right now");
    }
  }
  ngOnInit() {
  }
}
