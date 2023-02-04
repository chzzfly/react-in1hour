import React from "react";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("You've changed the count to " + count);
  }, [count]);
  return (
    <>
      <h2>现在让我们使用useState实现一个计数器</h2>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

function AppCounter() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Counter />
    </div>
  );
}

export default AppCounter;
