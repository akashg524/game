import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameTilesComponent } from './game-tiles/game-tiles.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { ScoreComponentComponent } from './score-component/score-component.component';
// import { HomeComponentComponent } from './home-component/home-component.component';
// import { GetApiComponent} from './get-api/get-api.component';
const routes: Routes =
  [
    { path: 'game', component: GameTilesComponent },
    { path: '', component: LandingComponentComponent },
    { path: 'scoreboard', component: ScoreComponentComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
