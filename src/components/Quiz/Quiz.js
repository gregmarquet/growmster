import React from 'react'
import InputRange from 'react-input-range';


function Quiz(props) {
  return (
    <div>
      Here is the Quiz!
      <input 
        type="range" 
        min="0" 
        max="10" 
        value={props.value}
        onChange={props.onValueChange}/>
        {props.value}
    </div>
  )
}

export default Quiz;