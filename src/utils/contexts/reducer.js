export const initialState = {
  user: null,
  fav: [],
};
export const actionTypes = {
  SET_USER: "SET_USER",
  UPDATE_FAV: "UPDATE_FAV",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.UPDATE_FAV:
      return {
        ...state,
        fav: action.fav,
      };

    default:
      return state;
  }
};

export default reducer;
