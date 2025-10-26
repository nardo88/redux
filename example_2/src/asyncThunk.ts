import { setListActionCreator, type ICard } from "./reducer";
import type { AppDispatch } from "./store";

export const simpleAsyncThunk = (dispatch: AppDispatch) => {
  fetch("https://api.distant.global/api/v1/dictionary/get-dictionary/news")
    .then((d) => d.json())
    .then((data: { categories: ICard[] }) =>
      dispatch(setListActionCreator(data.categories))
    )
    .catch((error) => console.log(error));
};

export const asyncThunk = (filter: string) => {
  return (dispatch: AppDispatch) => {
    fetch(
      `https://api.distant.global/api/v1/dictionary/get-dictionary/news?filter=${filter}`
    )
      .then((d) => d.json())
      .then((data: { categories: ICard[] }) =>
        dispatch(setListActionCreator(data.categories))
      )
      .catch((error) => console.log(error));
  };
};
