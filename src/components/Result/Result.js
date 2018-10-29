import React from 'react'
import Chart from '../Chart/Chart'
import Career from '../Career/Career'

function Result(props) {
  return (
    <div>
      <Chart 
        values={props.values}/>
      <Career />
    </div>
  )
}

export default Result;