import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["rootReducer", "form"],
};
 const storageReducer = combineReducers({
  auth: authReducer,
  rootReducer: rootReducer,
  form: formReducer,
});
//  export const storageReducer = combineReducers({
//   auth: authReducer,
//   rootReducer: rootReducer,
//   form: formReducer,
// });

export default persistReducer(persistConfig, storageReducer);
