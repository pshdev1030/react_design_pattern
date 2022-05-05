import { CounterContentWrapper } from "../../../styles";
import useCounter from "../hooks/useCounter";
export default function Counter({
  initialValue = 0,
}: {
  initialValue?: number;
}) {
  const [count, handleIncrement, handleDecrement] = useCounter(initialValue);
  return (
    <div className={CounterContentWrapper}>
      <div className="count">{count}</div>
      <div>
        <button className="button" onClick={handleIncrement}>
          +
        </button>
        <button className="button" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}
