import createReducer from 'utils/createReducer';
import * as action from './action';

const initialState = {
  list: [],
};

export default createReducer(initialState, (state, payload) => ({
  [action.GET_PRODUCTS_SUCCESS]: { ...state, list: payload },
}));
