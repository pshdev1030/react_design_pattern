import { CounterContentWrapper } from "../../styles";
import { Counter } from "./Counter";
import useCounter from "./hooks/useCounter";

export default function Hooks({ initialValue = 0 }: { initialValue?: number }) {
  const [count, handleIncrement, handleDecrement] = useCounter(initialValue);
  return (
    <div>
      <h1>Hooks Pattern</h1>
      <div className={CounterContentWrapper}>
        <Counter count={count}>
          <Counter.Count />
          <Counter.Increment handleIncrement={handleIncrement} />
          <Counter.Decrement handleDecrement={handleDecrement} />
        </Counter>
      </div>
    </div>
  );
}
