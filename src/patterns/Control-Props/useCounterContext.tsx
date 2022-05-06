import React from "react";
import { ReactNode } from "react";

interface CounterContextType {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const CounterContext = React.createContext<CounterContextType | null>(null);

function CounterProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: CounterContextType;
}) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
