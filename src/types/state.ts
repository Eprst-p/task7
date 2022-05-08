import { GameGenre } from '../settings/game-genre.js';
import {store} from '../store/index.js';
import { gameType } from './game-type';


export type DataProcess = {
  allGames: gameType[];
  chosenGenre: GameGenre;
};



export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
