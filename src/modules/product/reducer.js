import * as action from './action';
import createReducer from 'utils/createReducer';

const initialState = {
  list: [],
};

export default createReducer(initialState, (state, payload) => ({
  [action.GET_PRODUCTS_SUCCESS]: { ...state, list: payload },
}));
