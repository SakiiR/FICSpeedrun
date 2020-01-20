import { combineReducers } from "redux";

const generalReducer = (state = {}, action) => {
  if (action.type === "STOP_LOADING") {
    state = { ...state, loading: false };
    return state;
  }
  switch (action.type.split("_").slice(-1)[0]) {
    case "PENDING":
      state = { ...state, loading: true };
      break;
    default:
      state = { ...state };
  }

  switch (action.type) {
    default:
      state = { ...state };
  }

  return state;
};

const reducers = combineReducers({
  generalReducer
});

export default reducers;
