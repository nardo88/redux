import type { ActionType, ReducerType } from "./redux";

interface IState {
  count: number;
}

const defaultState = {
  count: 0,
};

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const reducerCount: ReducerType<IState> = (
  state = defaultState,
  action: ActionType
): IState => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// action creator
export const incrementActionCreator = () => ({ type: INCREMENT });
export const decrementActionCreator = () => ({ type: DECREMENT });
