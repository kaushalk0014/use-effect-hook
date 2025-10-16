// CountContext.tsx
import { createContext } from "react";

export const CountContext = createContext<number>(0); // You can also use an object for more complex state