import {createStore, applyMiddleware,compose} from 'redux';
import state from "./state";
import reducers from "./reducers";

import logger from "redux-logger";
import thunk from "redux-thunk";

// var store = createStore(reducers,state);

// const store = createStore(
//   reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// export default store;
//

const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
 applyMiddleware(thunk, logger)
);
const store = createStore(reducers,state,enhancer);
export default store;
