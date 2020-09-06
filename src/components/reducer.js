export const initialState = {
  //wartosc poczatkowa
  user: null,
};

export const actionTypes = {
  //okreslamy akcje
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  //jesli dostaniemy akcje tor obimy cos switchem
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
