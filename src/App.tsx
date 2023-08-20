import { useState } from "react";
import "./App.css";
import CounterDisplay from "./components/CounterDisplay";
import CounterActions from "./components/CounterActions";
export interface counterDispatchObject {
  type: "increment" | "decrement" | "reset";
  payload: {
    value: number;
  };
}

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonAction = ({ type, payload }: counterDispatchObject) => {
    if (type == "increment") {
      setCounter((prev) => prev + payload.value);
    }
    if (type == "decrement") {
      setCounter((prev) => prev - payload.value);
    }
    if (type == "reset") {
      setCounter(payload.value);
    }
  };

  return (
    <>
      <CounterDisplay counter={counter} />
      <CounterActions callback={handleButtonAction} />
    </>
  );
}

export default App;
