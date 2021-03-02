export function exercise(state, action) {
  switch (action.type) {
    case "GET_EXERCISES_REQUEST":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
