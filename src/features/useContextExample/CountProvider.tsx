// CountProvider.tsx
import React, { useState } from "react";
import { CountContext } from "./CountContext";

interface CountProviderProps {
  children: React.ReactNode;
}

const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      {children}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </CountContext.Provider>
  );
};

export default CountProvider;