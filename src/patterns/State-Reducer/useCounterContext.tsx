import React, { ReactNode } from "react";

const CounterContext = React.createContext<number | null>(null);

interface CounterProviderType {
  children: ReactNode;
  value: number;
}

function CounterProvider({ children, value }: CounterProviderType) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
