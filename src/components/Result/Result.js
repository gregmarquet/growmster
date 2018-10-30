import React from 'react'
import Chart from '../Chart/Chart'
import Career from '../Career/Career'
import Love from '../Love/Love'
import Finance from '../Finance/Finance'
import Contribution from '../Contribution/Contribution'
import Relationships from '../Relationships/Relationships'

function Result(props) {
  return (
    <div>
      <Chart 
        values={props.values}/>
      <Career />
      <Love />
      <Finance />
      <Contribution />
      <Relationships />
    </div>
  )
}

export default Result;