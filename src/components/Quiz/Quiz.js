import React, { Component } from 'react';
import InputRange from 'react-input-range';

import './Quiz.css'


class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      values: {
        love: 0,
        finance: 0
      }
    }
  }

  handleChange = (event) => {
    const values = this.state.values
    const value = event.target.value
    const name = event.target.name
    values[name] = value
    console.log(name, value)
    this.setState({ values })
  }
  render() {
    return (
      <div className="container">
        <div className="separation"></div>
        <p className="intro-text">Here are some areas of improvement, rate them from 0 to 10 based on how happy or unhappy you are in those areas compared to where you would like to be. </p>
        <div className="separation"></div>
        <p className="area">Love: {this.state.values.love}</p>
        <input
          type="range"
          min="0"
          max="10"
          name="love"
          value={this.state.values.love}
          onChange={this.handleChange} />
        
        <p className="area">Finance: {this.state.values.finance}</p>
        <input
          type="range"
          min="0"
          max="10"
          name="finance"
          value={this.state.values.finance}
          onChange={this.handleChange} />

      </div>
    )
  }
  
}

export default Quiz;