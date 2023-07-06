import { useSelector } from "react-redux/es/exports";
import { RootState } from "./redux/store";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <button>Increment</button>
      <h1>Count: {count}</h1>
      <button>Decrement</button>
    </>
  );
}

export default App;
