import { useState } from "react";
import PropTypes from "prop-types";

export  const CounterApp = ({value = 20}) => {
  const [counter, setCounter] = useState(value); // El estado inicial es `value`

  const handleAdd = () => setCounter(counter + 1);
  const handleMinus = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value); // Reinicia al valor inicial (value)

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
    </>
  );
};

// Definición de PropTypes (opcional pero recomendado)
CounterApp.propTypes = {
  value: PropTypes.number,
};

// Valor por defecto si no se pasa `value`
//CounterApp.defaultProps = {
  //value: 20, // Puedes cambiarlo a 20 si prefieres
//};