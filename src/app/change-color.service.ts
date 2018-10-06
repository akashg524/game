import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { GameTilesComponent } from './game-tiles/game-tiles.component';

@Injectable({
  providedIn: 'root'
})
export class ChangeColorService {
  constructor(private game: GameTilesComponent) { }

}
