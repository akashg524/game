import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { GameTilesComponent } from './game-tiles/game-tiles.component';

@Injectable({
  providedIn: 'root'
})
export class ChangeColorService {
  @ViewChild("box_1") box_1: ElementRef;
  @ViewChild("box_2") box_2: ElementRef;
  @ViewChild("box_3") box_3: ElementRef;
  @ViewChild("box_4") box_4: ElementRef;
  constructor(private game: GameTilesComponent) { }
  changeColor() {
    let color = Math.floor(Math.random() * 4) + 1;
    while (color === this.game.lastNum) {
      color = Math.floor(Math.random() * 4) + 1;
    }
    this.game.lastNum = color;
    switch (color) {
      case 1: this.box_1.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.game.isDisabled = false;
        console.log(color);
        break;
      case 2: this.box_2.nativeElement.classList.add("red");
        this.box_1.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.game.isDisabled = false;
        console.log(color);
        break;
      case 3: this.box_3.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_1.nativeElement.classList.remove("red");
        this.box_4.nativeElement.classList.remove("red");
        this.game.isDisabled = false;
        console.log(color);
        break;
      case 4: this.box_4.nativeElement.classList.add("red");
        this.box_2.nativeElement.classList.remove("red");
        this.box_3.nativeElement.classList.remove("red");
        this.box_1.nativeElement.classList.remove("red");
        this.game.isDisabled = false;
        console.log(color);
        break;
    }
  }
}
