import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import testReducer from './test/reducer';
import testEpic from './test/epic';

export const rootReducer = combineReducers({ test: testReducer });
export const rootEpic = combineEpics(testEpic);
