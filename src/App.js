import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "./action"

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information i shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
