import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import {reducer as toastrReducer} from 'react-redux-toastr'

import productReducer from './product/reducer';
import productEpic from './product/epic';
import rankingReducer from './ranking/reducer';
import rankingEpic from './ranking/epic';

export const rootReducer = combineReducers({
  toastr: toastrReducer,
  product: productReducer,
  ranking: rankingReducer,
});

export const rootEpic = combineEpics(
  productEpic,
  rankingEpic,
);
