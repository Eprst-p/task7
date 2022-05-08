import {State} from '../types/state'
import {createSelector} from 'reselect';


export const getAllGames = (state:State) => state.dataProcess.allGames;
export const getChosenGenre = (state:State) => state.dataProcess.chosenGenre;

export const getGamesForGenre = createSelector(getAllGames, getChosenGenre, (allGames, choosenGenre) => allGames.filter((game) => game.genre === choosenGenre));
