import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function increment() {
    setCount((c) => c + step);
  }
  function decrement() {
    setCount((c) => c - step);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="App">
      <div>
        <span>range :</span>
        <input
          type="range"
          min={0}
          max={10}
          Value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={increment}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={reset}>reset</button>
      ) : null}
    </div>
  );
}
