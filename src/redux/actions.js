import Configuration from "../configuration/config";
import actions from "./constants";

export const listTeams = () => ({
  type: actions.GET_TEAMS_ACTION,
  __http: true,
  __method: "list",
  __service: "teams",
  params: [],
  onSuccess: (store, result) => {},
  reduce: (action, state) => {
    const s = { ...state };
    if (action.type.split("_").slice(-1)[0] !== "SUCCESS") return s;

    for (const id of Configuration.ctfd_ids) {
      const team = action.result.data.data.find(item => item.id === id);
      if (team != null) {
        s["team" + id].name = team.name;
      }
    }
    return s;
  }
});

export const stopEvent = team_id => ({
  type: actions.STOP_EVENT,
  __http: false,
  reduce: (action, state) => {
    const s = { ...state };

    s["team" + team_id].event = null;
    return s;
  }
});

export const triggerEvent = (team_id, type) => ({
  type: actions.TRIGGER_EVENT,
  __http: false,
  reduce: (action, state) => {
    const s = { ...state };

    state["team" + team_id].event = type;

    return s;
  },
  onEnd: store => {
    const events = Configuration.events;
    const event = events[type];
    setTimeout(() => {
      store.dispatch(stopEvent(team_id));
    }, event.duration);
  }
});

export const stopMessage = () => ({
  type: actions.STOP_MESSAGE,
  __http: false
});

export const triggerMessage = message => ({
  type: actions.TRIGGER_MESSAGE,
  __http: false,
  message,
  onEnd: store => {
    setTimeout(() => {
      store.dispatch(stopMessage());
    }, Configuration.message_duration);
  }
});

export const checkSolves = team_id => ({
  type: actions.CHECK_SOLVES_REQUEST,
  __http: true,
  __method: "checkSolves",
  __service: "teams",
  params: [team_id],
  reduce: (action, state) => {
    const s = { ...state };
    if (action.type.split("_").slice(-1)[0] !== "SUCCESS") return s;
    action.result["solve_before"] = s["team" + team_id].solves;
    s["team" + team_id].solves = action.result.data.data.length;
    return s;
  },
  onSuccess: (store, result) => {
    const localSolves = result.solve_before;
    const remoteSolves = result.data.data.length;

    // Dispatching great solve event
    if (remoteSolves > localSolves) {
      const team_name = store.getState().general["team" + team_id].name;
      store.dispatch(triggerEvent(team_id, "solve"));
      store.dispatch(triggerMessage(`Le joueur ${team_name} vient de flag !!`));
    }
  }
});

export const checkFails = team_id => ({
  type: actions.CHECK_FAILS_REQUEST,
  __http: true,
  __method: "checkFails",
  __service: "teams",
  params: [team_id],
  reduce: (action, state) => {
    const s = { ...state };
    if (action.type.split("_").slice(-1)[0] !== "SUCCESS") return s;
    action.result["fails_before"] = s["team" + team_id].fails;
    s["team" + team_id].fails = action.result.data.data.length;
    return s;
  },
  onSuccess: (store, result) => {
    const localFails = result.fails_before;
    const remoteFails = result.data.data.length;

    // Dispatching great solve event
    if (remoteFails > localFails) {
      const team_name = store.getState().general["team" + team_id].name;
      store.dispatch(triggerEvent(team_id, "fail"));
      store.dispatch(
        triggerMessage(
          `Le joueur ${team_name} n'arrive pas à entrer un flag correctement ...`
        )
      );
    }
  }
});
