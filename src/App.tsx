import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button> <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        incrementByAmount
      </button>
    </>
  );
}

export default App;
