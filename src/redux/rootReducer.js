import { combineReducers } from "redux";
import loadingReducer from "./loading/loadingReducer";
import snackbarReducer from "./snackbar/snackbarReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
