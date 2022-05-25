import { useReducer } from "react";

const internalReducer = (
  { count }: { count: number },
  { type, payload }: { type: "increment" | "decrement"; payload?: any }
) => {
  switch (type) {
    case "increment":
      return {
        count: count + 1,
      };
    case "decrement":
      return {
        count: Math.max(0, count - 1),
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

function useCounter(
  { initial }: { initial: number },
  reducer = internalReducer
) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}

useCounter.reducer = internalReducer;
useCounter.types = {
  increment: "increment",
  decrement: "decrement",
};

export { useCounter };
