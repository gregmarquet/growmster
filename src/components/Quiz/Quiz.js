import React, { Component } from 'react';
import InputRange from 'react-input-range';

import './Quiz.css'


class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 0 }
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      value: value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="separation"></div>
        <p className="intro-text">Here are some areas of improvement, rate them from 0 to 10 based on how happy or unhappy you are in those areas compared to where you would like to be. </p>
        <div className="separation"></div>
        <p className="area">Love: {this.state.value}</p>
        <input
          type="range"
          min="0"
          max="10"
          value={this.state.value}
          onChange={this.handleChange} />

      </div>
    )
  }
  
}

export default Quiz;