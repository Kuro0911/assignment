export const initialState = {
  user: {username: "", password: "" },
  fav: [],
  playlists: [],
};
export const actionTypes = {
  SET_USER: "SET_USER",
  UPDATE_FAV: "UPDATE_FAV",
  ADD_PLAYLIST: "ADD_PLAYLIST",
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
    case actionTypes.ADD_PLAYLIST:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
