import React from 'react'
import Chart from '../Chart/Chart'
import Career from '../Career/Career'
import Love from '../Love/Love'
import Finance from '../Finance/Finance'

function Result(props) {
  return (
    <div>
      <Chart 
        values={props.values}/>
      <Career />
      <Love />
      <Finance />
    </div>
  )
}

export default Result;