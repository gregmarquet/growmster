import React, { Component } from 'react';
import Chart from '../Chart/Chart'
import Career from '../Career/Career'
import Love from '../Love/Love'
import Finance from '../Finance/Finance'
import Contribution from '../Contribution/Contribution'
import Relationships from '../Relationships/Relationships'
import Fun from '../Fun/Fun'
import Fitness from '../Fitness/Fitness'

import './Result.css'

class Result extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Chart 
          values={this.props.values}/>
        <div className="result_intro">
          <p>Look at the chart above and try to work on the areas that are below the red line in priority. Your goal should be to bring all the areas at the same level.</p>
          <p>Find below some book suggestions in each area of improvement. I hope those books will help you grow as much as they helped me.</p>
        </div>
        <Career />
        <Love />
        <Finance />
        <Contribution />
        <Relationships />
        <Fun />
        <Fitness />
      </div>
    )
  }
}

export default Result;