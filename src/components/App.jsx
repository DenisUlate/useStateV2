import React, { useState } from "react";
import "../styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1 className="font">{count}</h1>
      <button className="button-30" onClick={decrease}>
        -
      </button>
      <button className="button-30" onClick={increase}>
        +
      </button>
    </div>
  );
}
