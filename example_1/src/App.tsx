import "./App.css";
import { decrementActionCreator, incrementActionCreator } from "./reducer";
import store from "./store";

function App() {
  const state = store.getState();

  const decrement = () => store.dispatch(decrementActionCreator());
  const increment = () => store.dispatch(incrementActionCreator());

  return (
    <div className="wrapper">
      <p>{state.countState.count}</p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
