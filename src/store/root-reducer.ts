import {combineReducers} from '@reduxjs/toolkit';
import { dataProcess } from './data-process';

export const rootReducer = combineReducers({
  'dataProcess': dataProcess.reducer,
});
