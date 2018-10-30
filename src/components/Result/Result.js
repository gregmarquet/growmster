import React, { Component } from 'react';
import Chart from '../Chart/Chart'
import Career from '../Career/Career'
import Love from '../Love/Love'
import Finance from '../Finance/Finance'
import Contribution from '../Contribution/Contribution'
import Relationships from '../Relationships/Relationships'
import Fun from '../Fun/Fun'

class Result extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Chart 
          values={this.props.values}/>
        <Career />
        <Love />
        <Finance />
        <Contribution />
        <Relationships />
        <Fun />
      </div>
    )
  }
}

export default Result;