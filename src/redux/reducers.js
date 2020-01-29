import { combineReducers } from "redux";

const general = (state = {}, action) => {
  if (action.type === "STOP_LOADING") {
    state = { ...state, loading: false };
    return state;
  }

  if (action.reduce) {
    action["new_state"] = action.reduce(action, state);
  }
  switch (action.type.split("_").slice(-1)[0]) {
    case "PENDING":
      state = { ...state, loading: true };
      break;
    case "SUCCESS":
      break;
    default:
      state = { ...state };
  }

  switch (action.type) {
    case "GET_TEAMS_SUCCESS":
      state = {
        ...state,
        team1: { ...state.team1, name: action.new_state.team1.name },
        team2: { ...state.team2, name: action.new_state.team2.name },
        team3: { ...state.team3, name: action.new_state.team3.name },
        team4: { ...state.team4, name: action.new_state.team4.name }
      };
      break;

    case "STOP_EVENT":
      state = {
        ...state,
        team1: { ...state.team1, event: action.new_state.team1.event },
        team2: { ...state.team2, event: action.new_state.team2.event },
        team3: { ...state.team3, event: action.new_state.team3.event },
        team4: { ...state.team4, event: action.new_state.team4.event }
      };
      break;

    case "TRIGGER_EVENT":
      state = {
        ...state,
        team1: { ...state.team1, event: action.new_state.team1.event },
        team2: { ...state.team2, event: action.new_state.team2.event },
        team3: { ...state.team3, event: action.new_state.team3.event },
        team4: { ...state.team4, event: action.new_state.team4.event }
      };
      break;

    case "CHECK_SOLVES_SUCCESS":
      state = {
        ...state,
        team1: { ...state.team1, solves: action.new_state.team1.solves },
        team2: { ...state.team2, solves: action.new_state.team2.solves },
        team3: { ...state.team3, solves: action.new_state.team3.solves },
        team4: { ...state.team4, solves: action.new_state.team4.solves }
      };
      break;

    case "CHECK_FAILS_SUCCESS":
      state = {
        ...state,
        team1: { ...state.team1, fails: action.new_state.team1.fails },
        team2: { ...state.team2, fails: action.new_state.team2.fails },
        team3: { ...state.team3, fails: action.new_state.team3.fails },
        team4: { ...state.team4, fails: action.new_state.team4.fails }
      };
      break;

    case "CHECK_LEAD_SUCCESS":
      state = {
        ...state,
        team1: { ...state.team1, lead: action.new_state.team1.lead },
        team2: { ...state.team2, lead: action.new_state.team2.lead },
        team3: { ...state.team3, lead: action.new_state.team3.lead },
        team4: { ...state.team4, lead: action.new_state.team4.lead },
        teams: action.result.data.data
      };
      break;
    case "TRIGGER_MESSAGE":
      state = { ...state, message: action.message };
      break;
    case "GET_SCOREBOARD_SUCCESS":
      state = { ...state, teams: action.result.data.data };
      break;
    case "STOP_MESSAGE":
      state = { ...state, message: "" };
      break;
    default:
      state = { ...state };
  }

  return state;
};

const reducers = combineReducers({
  general
});

export default reducers;
