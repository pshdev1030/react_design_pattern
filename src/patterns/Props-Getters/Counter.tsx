import { Count } from "./components/Count";
import { Decrement } from "./components/Decrement";
import { Increment } from "./components/Increment";
import { ReactNode, useEffect, useRef } from "react";
import { CounterProvider } from "./useCounterContext";
function Counter({
  count,
  children,
  onChange,
  ...props
}: {
  count: number;
  children?: ReactNode;
  onChange?: (newCount: number) => void;
}) {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded) {
      onChange && onChange(count);
    }
  }, [count, onChange]);
  return <CounterProvider value={{ count }}>{children}</CounterProvider>;
}

Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
