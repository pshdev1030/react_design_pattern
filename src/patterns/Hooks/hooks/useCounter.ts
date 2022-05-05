import { useState } from "react";

export default function useCounter(
  initialValue: number
): [count: number, handleIncrement: () => void, handleDecrement: () => void] {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  return [count, handleIncrement, handleDecrement];
}
