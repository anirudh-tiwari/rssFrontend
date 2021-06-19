import { LoadingTrue, LoadingFalse } from "./loadingTypes";

export const LoadingTrue = () => {
  return {
    type: LoadingTrue,
  };
};

export const LoadingFalse = () => {
  return {
    type: LoadingFalse,
  };
};
