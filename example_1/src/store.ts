import { reducerCount } from "./reducer";
import { createStore } from "./redux";

const store = createStore({
  reducers: { countState: reducerCount },
});

export default store;
