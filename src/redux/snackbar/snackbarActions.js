import { SNACKBAR_UI_Open, SNACKBAR_UI_Close } from "./snackbarTypes";

export const snackbarUIOpen = () => {
  return {
    type: SNACKBAR_UI_Open,
  };
};

export const snackbarUIClose = () => {
  return {
    type: SNACKBAR_UI_Close,
  };
};
