export interface ICard {
  value: string;
  label: string;
}

interface IState {
  count: number;
  value: string;
  list: ICard[];
}

interface IAction {
  type: string;
  payload?: string | ICard[];
}

const defaultState: IState = {
  count: 0,
  value: "",
  list: [],
};

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const SET_VALUE = "set_value";
export const SET_LIST = "set_list";

export const reducerCount = (state = defaultState, action: IAction): IState => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE: {
      return { ...state, value: action.payload as string };
    }
    case SET_LIST: {
      console.log();
      return { ...state, list: action.payload as ICard[] };
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
export const setListActionCreator = (payload: ICard[]) => ({
  type: SET_LIST,
  payload,
});
