import {State} from '../types/state'
import {createSelector} from 'reselect';
import { allGames } from '../fixtures/sources';


export const getChosenGenre = (state:State) => state.dataProcess.chosenGenre;
export const getChosenID = (state:State) => state.dataProcess.chosenID;

export const getGameByID = createSelector(getChosenID, (id) => allGames.find((game) => game.id === id));
