import React from 'react'
import Chart from '../Chart/Chart'
import Career from '../Career/Career'
import Love from '../Love/Love'

function Result(props) {
  return (
    <div>
      <Chart 
        values={props.values}/>
      <Career />
      <Love />
    </div>
  )
}

export default Result;