import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameTilesComponent } from './game-tiles/game-tiles.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CountdownModule } from 'ngx-countdown';
import {HttpClientModule} from '@angular/common/http';
import { ScoreComponentComponent } from './score-component/score-component.component'
@NgModule({
  declarations: [
    AppComponent,
    GameTilesComponent,
    LandingComponentComponent,
    ScoreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
