import {createSlice} from '@reduxjs/toolkit';
import { GameGenre } from '../settings/game-genre';
import {DataProcess} from '../types/state';
import { allGames } from '../default-data/all-games';


const initialState: DataProcess = {
  chosenGenre: GameGenre.Euro,
  chosenID: allGames[0].id
};

export const dataProcess = createSlice({
  name: 'dataProcess',
  initialState,
  reducers: {
    changeGenre: (state, {payload}) => {state.chosenGenre = payload},
    changeID: (state, {payload}) => {state.chosenID = payload},
  },
});

export const {changeGenre, changeID} = dataProcess.actions;
