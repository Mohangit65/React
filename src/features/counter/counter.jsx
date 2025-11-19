import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement } from "./counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter Page</h1>
      <h2>Value: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
