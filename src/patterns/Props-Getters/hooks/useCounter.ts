import { useState } from "react";

const callFnsInsquence =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

function useCounter(initial: number) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const getCounterProps = ({
    onClick,
    ...otherProps
  }: {
    onClick?: () => void | undefined;
    otherProps?: any[];
  } = {}) => ({
    count: count,
    ...otherProps,
  });

  const getDecrementProps = ({
    onClick,
    ...otherProps
  }: {
    onClick?: () => void | undefined;
    otherProps?: any[];
  } = {}) => ({
    onClick: callFnsInsquence(handleDecrement, onClick),
    ...otherProps,
  });

  const getIncrementProps = ({
    onClick,
    ...otherProps
  }: {
    onClick?: () => void | undefined;
    otherProps?: any[];
  } = {}) => ({
    onClick: callFnsInsquence(handleIncrement, onClick),
    ...otherProps,
  });

  return {
    count,
    handleIncrement,
    handleDecrement,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
}

export { useCounter };
