import { bootstrapApplication } from '@angular/platform-browser';
import { GameBoardComponent } from './app/game-board/game-board.component';

bootstrapApplication(GameBoardComponent)
  .catch(err => console.error(err));