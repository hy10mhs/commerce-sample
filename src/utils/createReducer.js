export default function createReducer(initialState, handle) {
  return (state = initialState, { type, payload }) => handle(state, payload)[type] || state;
}
