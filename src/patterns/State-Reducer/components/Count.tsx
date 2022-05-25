import { useCounterContext } from "../useCounterContext";

const Count = () => {
  const count = useCounterContext();
  return <div className="count">{count}</div>;
};

export { Count };
