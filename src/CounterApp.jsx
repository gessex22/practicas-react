import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const HandleAdd = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(value);
  };
  const minusCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Counter App</h1>
      <h2> {counter}</h2>

      <button onClick={HandleAdd}> addcion +1</button>
      <button onClick={minusCounter}> sustraccion -1</button>
      <button onClick={resetCounter}> reset +1</button>
    </>
  );
};
