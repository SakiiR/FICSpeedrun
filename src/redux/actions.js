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
      store.dispatch(triggerMessage(Configuration.messages.solve(team_name)));
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
    s["team" + team_id].fails = action.result.data.meta.count;
    return s;
  },
  onSuccess: (store, result) => {
    const localFails = result.fails_before;
    const remoteFails = result.data.meta.count;

    // Dispatching great solve event
    if (remoteFails > localFails) {
      const team_name = store.getState().general["team" + team_id].name;
      store.dispatch(triggerEvent(team_id, "fail"));
      store.dispatch(triggerMessage(Configuration.messages.fail(team_name)));
    }
  }
});

export const getScoreboard = () => ({
  type: actions.GET_SCOREBOARD_REQUEST,
  __http: true,
  __method: "getScoreboard",
  __service: "scoreboard",
  params: [],
  onSuccess: (store, result) => {}
});

export const checkLead = () => ({
  type: actions.CHECK_LEAD_REQUEST,
  __http: true,
  __method: "checkLead",
  __service: "scoreboard",
  params: [],
  reduce: (action, state) => {
    const s = { ...state };

    if (action.type.split("_").slice(-1)[0] !== "SUCCESS") return s;

    for (const id of [1, 2, 3, 4]) {
      const team = s["team" + id];
      if (team.lead === true) actions.results["lead_before"] = team.id;
      team.lead = false;
    }

    if (action.result.data.data.length > 0) {
      const new_lead = action.result.data.data[0].account_id;
      s["team" + new_lead].lead = true;
    }

    return s;
  },
  onSuccess: (store, result) => {
    if (result.data.data.length > 0) {
      const new_lead = result.data.data[0].account_id;
      if (result["lead_before"] !== new_lead) {
        // trigger event new lead
        const team_name = store.getState().general["team" + new_lead].name;
        store.dispatch(triggerEvent(new_lead, "newlead"));
        store.dispatch(
          triggerMessage(Configuration.messages.lead_change(team_name))
        );
      }
    }
  }
});
