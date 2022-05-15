import { GameGenre } from '../settings/game-genre.js';
import {store} from '../store/index.js';


export type DataProcess = {
  chosenGenre: GameGenre;
  chosenID: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
