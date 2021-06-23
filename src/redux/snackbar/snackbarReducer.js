import { SNACKBAR_UI_Open, SNACKBAR_UI_Close } from "./snackbarTypes";

const snackbarInitialState = {
  open: false,
};
const snackbarReducer = (state = snackbarInitialState, action) => {
  switch (action.type) {
    case SNACKBAR_UI_Open:
      return {
        ...state,
        open: true,
      };
    case SNACKBAR_UI_Close:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
export default snackbarReducer;
