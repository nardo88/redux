// Типизация actions
export type ActionType<T = void> = T extends void
  ? { type: string }
  : { type: string; payload: T };

// Типизация reducer
export type ReducerType<S = any> = (
  state: S | undefined,
  action: ActionType<any>
) => S;

// типизация root reducer
interface IOptions<R extends Record<string, ReducerType>> {
  reducers: R;
}

// Хелпер для вывода типа состояния по reducer
type ExtractState<R extends Record<string, ReducerType>> = {
  [K in keyof R]: ReturnType<R[K]>;
};

class Store<R extends Record<string, ReducerType>> {
  private state: ExtractState<R>;
  private reducers: R;
  private listeners: Array<() => void>;

  constructor(options: IOptions<R>) {
    this.reducers = options.reducers;
    this.listeners = [];

    // Инициализация состояния для каждого reducer
    const initialState = {} as ExtractState<R>;
    for (const key in this.reducers) {
      initialState[key] = this.reducers[key](undefined, { type: "@@INIT" });
    }
    this.state = initialState;
  }

  getState(): ExtractState<R> {
    return this.state;
  }

  dispatch(action: ActionType) {
    for (const key in this.reducers) {
      this.state[key] = this.reducers[key](this.state[key], action);
    }
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

export const createStore = <R extends Record<string, ReducerType>>(
  options: IOptions<R>
) => {
  return new Store(options);
};
