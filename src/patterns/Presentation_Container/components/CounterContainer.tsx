import { useState } from "react";
import Counter from "./Counter";

interface CounterContainerType {
  initialValue?: number;
}

export default function CounterContainer({
  initialValue = 0,
}: CounterContainerType) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <Counter
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
}
