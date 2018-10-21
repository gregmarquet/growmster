import React from 'react'
import InputRange from 'react-input-range';

import './Quiz.css'


function Quiz(props) {
  return (
    <div className="container">
      <p className="intro-text">Here are some areas of improvement, rate them from 0 to 10 based on how happy or unhappy you are in those areas compared to where you would like to be. </p>
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