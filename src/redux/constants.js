const GET_TEAMS_ACTION = "GET_TEAMS_REQUEST";
const TRIGGER_MESSAGE = "TRIGGER_MESSAGE";
const TRIGGER_EVENT = "TRIGGER_EVENT";
const STOP_EVENT = "STOP_EVENT";
const STOP_LOADING = "STOP_LOADING";
const CHECK_SOLVES_REQUEST = "CHECK_SOLVES_REQUEST";
const CHECK_FAILS_REQUEST = "CHECK_FAILS_REQUEST";
const CHECK_LEAD_REQUEST = "CHECK_LEAD_REQUEST";
const STOP_MESSAGE = "STOP_MESSAGE";
const GET_SCOREBOARD_REQUEST = "GET_SCOREBOARD_REQUEST";

const actions = {
  STOP_LOADING,
  GET_TEAMS_ACTION,
  TRIGGER_EVENT,
  STOP_EVENT,
  CHECK_SOLVES_REQUEST,
  CHECK_FAILS_REQUEST,
  TRIGGER_MESSAGE,
  STOP_MESSAGE,
  CHECK_LEAD_REQUEST,
  GET_SCOREBOARD_REQUEST
};

export const initialState = {
  general: {
    loading: false,
    message: "",
    teams: null,

    team1: {
      solves: 0,
      fails: 0,
      lead: false,
      event: null,
      name: "Player 1"
    },

    team2: {
      solves: 0,
      fails: 0,
      lead: false,
      event: null,
      name: "Player 2"
    },

    team3: {
      solves: 0,
      fails: 0,
      lead: false,
      event: null,
      name: "Player 3"
    },

    team4: {
      solves: 0,
      fails: 0,
      lead: false,
      event: null,
      name: "Player 4"
    }
  }
};

export default actions;
