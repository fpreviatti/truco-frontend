import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  declarations: [
    GameBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameBoardComponent] // Define o componente inicial da aplicação
})
export class AppModule { }