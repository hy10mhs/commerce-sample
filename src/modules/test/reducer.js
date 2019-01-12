import * as actions from './action';

const initialState = {
  ping: false,
  pong: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case actions.PING: return {
      ...state,
      ping: true,
    };
    case actions.PONG: return {
      ...state,
      pong: true,
    };

    default: return state;
  }
};
