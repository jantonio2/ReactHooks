import { useState } from 'react'

export const useCounter = (initialState = 10) => {
  
  const [counter, setCounter] = useState(initialState);

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  }

  const reset = () => {
    setCounter(initialState);
  }
  
  const decrement = (factor = 1) => {
    // setCounter(counter => counter - factor); Para que en la prueba se pueda hacer varias la operacion decrmentar
    setCounter(counter - factor);
  }

  return {
    counter, 
    increment,
    reset,
    decrement
  };
}
