import { ReactNode, useEffect, useRef, useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Increment, Decrement } from "./components/Index";
import { CounterContentWrapper } from "../../styles";

interface CounterType {
  children: ReactNode;
  value: null | number;
  initialValue?: number;
  onChange: (newCount: number) => void;
}
const Counter = ({
  children,
  value = null,
  initialValue = 0,
  onChange,
}: CounterType) => {
  const [count, setCount] = useState(initialValue);

  const isControlled = value !== null && !!onChange;

  const getCount = () => (isControlled ? value : count);

  const firstMounded = useRef(true);

  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange, isControlled]);

  const handleCountChange = (newValue: number) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(Math.max(getCount() - 1, 0));
  };
  return (
    <CounterProvider
      value={{ count: getCount(), handleDecrement, handleIncrement }}
    >
      <div className={CounterContentWrapper}>{children}</div>
    </CounterProvider>
  );
};

Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
