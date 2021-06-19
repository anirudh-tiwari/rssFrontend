import { createStore } from "redux";
import loadingReducer from "./loading/loadingReducer";
const store = createStore(loadingReducer);

export default store;
