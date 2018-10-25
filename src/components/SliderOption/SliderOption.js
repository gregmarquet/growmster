import React from 'react';

function SliderOption(props) {
  return (
    <div>
      <p className="area">
        {`${props.name}: ${props.values[props.name]}`}
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