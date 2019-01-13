export const GET_RANKING_REQUEST = 'ranking/GET_RANKING_REQUEST';
export const GET_RANKING_SUCCESS = 'ranking/GET_RANKING_SUCCESS';
export const GET_RANKING_FAILURE = 'ranking/GET_RANKING_FAILURE';

export const getRankingRequest = payload => ({ type: GET_RANKING_REQUEST, payload });
export const getRankingSuccess = payload => ({ type: GET_RANKING_SUCCESS, payload });
export const getRankingFailure = payload => ({ type: GET_RANKING_FAILURE, payload });
