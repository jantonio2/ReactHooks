import React, { useRef } from 'react'
import './effects.css'

export const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1> 
      <hr />

      <input 
        ref = {inputRef}
        className = "form-control"
        placeholder = "Su nombre"
      />     

      <button 
        className = "btn btn-outline-primary mt-5"
        onClick = {handleClick}
      >
        Focus
      </button>
    </>
  )
}
