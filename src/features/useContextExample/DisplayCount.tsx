// DisplayCount.tsx
import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const DisplayCount = () => {
  const count = useContext(CountContext); // ✅ Access shared data

  return <p>Shared Count: {count}</p>;
};

export default DisplayCount;