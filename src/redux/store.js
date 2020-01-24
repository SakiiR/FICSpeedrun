import { createStore, applyMiddleware } from "redux";
// import { logger, service } from "./middlewares";
import { service } from "./middlewares";
import reducers from "./reducers";
import { initialState } from "./constants";

// const store = createStore(reducers, initialState, applyMiddleware(logger, service));
const store = createStore(reducers, initialState, applyMiddleware(service));

export default store;
