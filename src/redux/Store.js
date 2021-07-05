import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk, logger];
const composeEnacher = composeWithDevTools({ trace: true, traceLimit: 25 })
export const store = createStore(rootReducer, composeEnacher(applyMiddleware(...middleware)));