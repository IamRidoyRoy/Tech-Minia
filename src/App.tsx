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
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-full	"
      >
        Increment
      </button>
      <br />
      <h1>Count: {count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-full	"
      >
        Decrement
      </button>{" "}
      <br />
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-full	"
      >
        incrementByAmount
      </button>
      <br />
    </>
  );
}

export default App;
