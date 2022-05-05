import { CounterContentWrapper } from "../../../styles";
import CounterType from "../../../type/counter";
export default function Counter({
  count,
  handleIncrement,
  handleDecrement,
}: CounterType) {
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
