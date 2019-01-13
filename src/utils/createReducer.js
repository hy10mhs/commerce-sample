export default function createReducer(initialState, handle) {
  return (state = initialState, { type, payload }) => {
    return handle(state, payload)[type] || state;
  };
}