import createReducer from 'utils/createReducer';
import * as productAction from '../product/action';
import * as rankingAction from '../ranking/action';

const initialState = {
  productLoading: false,
  rankingLoading: false,
};

export default createReducer(initialState, state => ({
  [productAction.GET_PRODUCTS_REQUEST]: { ...state, productLoading: true },
  [productAction.GET_PRODUCTS_SUCCESS]: { ...state, productLoading: false },
  [productAction.GET_PRODUCTS_FAILURE]: { ...state, productLoading: false },

  [rankingAction.GET_RANKING_REQUEST]: { ...state, rankingLoading: true },
  [rankingAction.GET_RANKING_SUCCESS]: { ...state, rankingLoading: false },
  [rankingAction.GET_RANKING_FAILURE]: { ...state, rankingLoading: false },
}));
