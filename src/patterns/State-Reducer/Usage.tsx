import { CounterContentWrapper } from "../../styles";
import { useCounter } from "./useCounter";
import { Counter } from "./Counter";

export default function StateReducer() {
  const reducer = (
    state: { count: number },
    action: { type: "decrement" | "increment"; payload?: any }
  ) => {
    switch (action.type) {
      case "decrement":
        return {
          count: Math.max(0, state.count - 2), //The decrement delta was changed for 2 (Default is 1)
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleDecrement, handleIncrement } = useCounter(
    { initial: 0 },
    reducer
  );
  return (
    <div>
      <h1>State Reducer Pattern</h1>
      <div className={CounterContentWrapper}>
        <Counter count={count}>
          <Counter.Count />
          <Counter.Increment handleIncrement={handleIncrement} />
          <Counter.Decrement handleDecrement={handleDecrement} />
        </Counter>
      </div>
      <div>
        <button onClick={handleIncrement}>Custom increment btn 1</button>
      </div>
    </div>
  );
}
