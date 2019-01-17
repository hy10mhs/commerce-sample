import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';

import productReducer from './product/reducer';
import productEpic from './product/epic';
import rankingReducer from './ranking/reducer';
import rankingEpic from './ranking/epic';

export const createReducer = history => combineReducers({
  router: connectRouter(history),
  toastr: toastrReducer,
  product: productReducer,
  ranking: rankingReducer,
});

export const createEpic = () => combineEpics(
  productEpic,
  rankingEpic,
);
