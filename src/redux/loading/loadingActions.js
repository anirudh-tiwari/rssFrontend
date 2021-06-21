import { LoadingTrue, LoadingFalse } from "./loadingTypes";

export const Loading_True = () => {
  return {
    type: LoadingTrue,
  };
};

export const Loading_False = () => {
  return {
    type: LoadingFalse,
  };
};
