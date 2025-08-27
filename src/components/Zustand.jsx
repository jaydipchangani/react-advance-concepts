import React from "react";
import { useCounterStore } from "./ZustandStore";

export default function Zestand() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <h1>Zestand</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
