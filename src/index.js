import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware, compose } from "redux";
import persistReducer from "./reducers/index";
// import {storageReducer} from "./reducers/index";
import App from "./components/App";
import reduxThunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistReducer,
  undefined,
  composeEnhancers(applyMiddleware(reduxThunk))
);
// const store = createStore(
//   storageReducer,
//   undefined,
//   composeEnhancers(applyMiddleware(reduxThunk))
// );
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
