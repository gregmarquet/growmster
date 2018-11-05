import React from 'react';

import './SliderOption.css';

function SliderOption(props) {
  return (
    <div className="slider-option">
      <p className="area">
        {`${props.name[0].toUpperCase()}${props.name.slice(1)}: ${props.values[props.name]}`}
      </p>
      <input
        type="range"
        min="0"
        max="10"
        name={props.name}
        value={props.values[props.name]}
        onChange={props.handleChange} />
    </div>
  )
}

export default SliderOption;