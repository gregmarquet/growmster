import React, { Component } from 'react';

import SliderOption from '../SliderOption/SliderOption'
import './Quiz.css'


class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      values: {
        love: 0,
        finance: 0,
        career: 0,
        contribution: 0,
        relationships: 0,
        fun: 0,
        fitness: 0
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
        
        <SliderOption
          name='love'
          values={this.state.values}
          handleChange={this.handleChange} />

        <SliderOption
          name='finance'
          values={this.state.values}
          handleChange={this.handleChange} />

        <SliderOption 
          name='career'
          values={this.state.values}
          handleChange={this.handleChange}/>

        <SliderOption
          name='contribution'
          values={this.state.values}
          handleChange={this.handleChange} />

        <SliderOption
          name='relationships'
          values={this.state.values}
          handleChange={this.handleChange} />

        <SliderOption
          name='fun'
          values={this.state.values}
          handleChange={this.handleChange} />

        <SliderOption
          name='fitness'
          values={this.state.values}
          handleChange={this.handleChange} />

        <button
          className="submit"
          id="submit"
          onClick={this.props.handleSubmit}
        >Done</button>
      </div>
    )
  }
  
}

export default Quiz;