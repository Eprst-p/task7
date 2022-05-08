import {createSlice} from '@reduxjs/toolkit';
import { GameGenre } from '../settings/game-genre';
import {DataProcess} from '../types/state';


const initialState: DataProcess = {
  allGames: [],
  chosenGenre: GameGenre.Euro,
};

export const dataProcess = createSlice({
  name: 'dataProcess',
  initialState,
  reducers: {
    loadGames: (state, {payload}) => {state.allGames = payload},
    changeGenre: (state, {payload}) => {state.chosenGenre = payload},
  },
});

export const {loadGames, changeGenre} = dataProcess.actions;
