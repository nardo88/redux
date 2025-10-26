import "./App.css";
import {
  decrementActionCreator,
  incrementActionCreator,
  setValueActionCreator,
} from "./reducer";
import store from "./store";

function App() {
  const state = store.getState();

  const decrement = () => store.dispatch(decrementActionCreator());
  const increment = () => store.dispatch(incrementActionCreator());

  return (
    <div className="wrapper">
      <p>{state.countState.count}</p>
      <input
        value={state.countState.value}
        onChange={(e) => {
          const action = setValueActionCreator(e.target.value);
          store.dispatch(action);
        }}
      />
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
