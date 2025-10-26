import "./App.css";
import { store, useAppDispatch, useAppSelector } from "./store";
import {
  decrementActionCreator,
  incrementActionCreator,
  setValueActionCreator,
} from "./reducer";
import { useEffect } from "react";
import { asyncThunk } from "./asyncThunk";

function App() {
  const { count, value, list } = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  const decrement = () => store.dispatch(decrementActionCreator());
  const increment = () => store.dispatch(incrementActionCreator());

  useEffect(() => {
    dispatch(asyncThunk(value));
  }, [value]);

  return (
    <div className="wrapper">
      <p>{count}</p>
      <input
        value={value}
        onChange={(e) => {
          const action = setValueActionCreator(e.target.value);
          store.dispatch(action);
        }}
      />
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      {list.map((item) => (
        <div key={item.value}>{item.label}</div>
      ))}
    </div>
  );
}

export default App;
