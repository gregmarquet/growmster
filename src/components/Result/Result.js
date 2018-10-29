import React from 'react'
import Chart from '../Chart/Chart'

function Result(props) {
  return (
    <div>
      <Chart 
        values={props.values}/>
    </div>
  )
}

export default Result;