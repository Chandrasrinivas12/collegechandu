import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";

const enableReduxDevTools = false; // Set this to false to disable Redux DevTools

const mystore = createStore(
  reducers,
  enableReduxDevTools
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default mystore;
