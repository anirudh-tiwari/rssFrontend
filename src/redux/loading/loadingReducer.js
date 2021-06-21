import { LoadingTrue, LoadingFalse } from "./loadingTypes";

const loadingInitialState = {
  value: true,
  displayElement: "none",
};
const loadingReducer = (state = loadingInitialState, action) => {
  switch (action.type) {
    case LoadingTrue:
      return {
        ...state,
        value: false,
        displayElement: "block",
      };
    case LoadingFalse:
      return {
        ...state,
        value: true,
      };
    default:
      return state;
  }
};
export default loadingReducer;
