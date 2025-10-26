import type { ActionType, ReducerType } from "./redux";

interface IState {
  count: number;
  value: string;
}

const defaultState: IState = {
  count: 0,
  value: "",
};

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const SET_VALUE = "set_value";

type CounterActions = ActionType | ActionType<string>;

export const reducerCount: ReducerType<IState> = (
  state = defaultState,
  action: CounterActions
): IState => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE: {
      const a = action as ActionType<string>;
      return { ...state, value: a.payload };
    }
    default:
      return state;
  }
};

// action creator
export const incrementActionCreator = () => ({ type: INCREMENT });
export const decrementActionCreator = () => ({ type: DECREMENT });
export const setValueActionCreator = (payload: string) => ({
  type: SET_VALUE,
  payload,
});
