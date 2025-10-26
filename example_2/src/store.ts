import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import { reducerCount } from "./reducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  count: reducerCount,
});

// добавляем middleware
export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
