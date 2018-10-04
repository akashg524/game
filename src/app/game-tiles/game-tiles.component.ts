import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LandingComponentComponent } from '../landing-component/landing-component.component';
import { AppComponent } from '../app.component';
import { StartGameServiceService } from '../start-game-service.service';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {Router} from '@angular/router'
import { PostDataService } from '../post-data.service';
@Component({
  providers: [LandingComponentComponent],
  selector: 'app-game-tiles',
  templateUrl: './game-tiles.component.html',
  styleUrls: ['./game-tiles.component.css']
})
export class GameTilesComponent implements OnInit {
  correctAns: number = 0;
  correctOffset:number=5;
  wrongOffset:number=-3;
  temp: any;
  isDisabled: boolean = true;
  lastNum: number = 0;
  StartGame: boolean = true;
  @ViewChild("box_1") box_1: ElementRef;
  @ViewChild("box_2") box_2: ElementRef;
  @ViewChild("box_3") box_3: ElementRef;
  @ViewChild("box_4") box_4: ElementRef;
  constructor(private logData: AppComponent, private st: StartGameServiceService,private router:Router,private log:PostDataService) { }
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
    this.logData.score = 0;
    this.temp = this.st.Start();
    this.temp.subscribe(() => this.changeColor());
  }
  onFinish() {
    this.logData.userData.score=this.logData.score;
    this.logData.userData.uid=uuid();
    this.isDisabled = true;
    console.log("your final Score is " + this.logData.score);
    this.log.postData(this.logData.userData);
    setTimeout(()=>{this.router.navigate(['scoreboard'])},4000);
  }
  trackScore($event: any) {
    if ($event.target.classList.contains('red')) 
    {
      this.correctAns = this.correctAns + 1;
      this.logData.score = this.logData.score + this.correctOffset;
      if (this.correctAns === 3  ) 
      {
        this.correctOffset=7;
        this.wrongOffset=4;
        this.temp.pipe(switchMap(() => interval(1000)));
        this.temp.subscribe(() => this.changeColor());
        console.log("switchMap Triggered");
      }
      this.isDisabled = true;
      console.log("your score is " + this.logData.score + " right now");
    }
    else 
      {
      this.logData.score = this.logData.score - this.wrongOffset;
      this.isDisabled = true;
      console.log("your score is " + this.logData.score + " right now");
    }
  }
  ngOnInit() {
  }
}
