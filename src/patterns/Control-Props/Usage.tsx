import React, { useState } from "react";
import { Counter } from "./Counter";

function ControlProps() {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount: number) => {
    setCount(newCount);
  };
  return (
    <div>
      <h1>Control Props Pattern</h1>
      <Counter value={count} onChange={handleChangeCounter}>
        <Counter.Count />
        <Counter.Increment />
        <Counter.Decrement />
      </Counter>
    </div>
  );
}

export { ControlProps };
