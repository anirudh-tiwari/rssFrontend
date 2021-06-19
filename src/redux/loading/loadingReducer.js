import { LoadingTrue, LoadingFalse } from "./loadingTypes";

const loadingInitialState = {
  value: false,
};
const loadingReducer = (state = loadingInitialState, action) => {
  switch (action.type) {
    case LoadingTrue:
      return {
        ...state,
        value: true,
      };
    case LoadingFalse:
      return {
        ...state,
        value: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
