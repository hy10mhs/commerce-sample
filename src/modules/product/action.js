export const GET_PRODUCTS_REQUEST = 'product/GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'product/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'product/GET_PRODUCTS_FAILURE';

export const getProductsRequest = payload => ({ type: GET_PRODUCTS_REQUEST, payload });
export const getProductsSuccess = payload => ({ type: GET_PRODUCTS_SUCCESS, payload });
export const getProductsFailure = payload => ({ type: GET_PRODUCTS_FAILURE, payload });
