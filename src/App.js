import React, { Component } from 'react';

import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizDone: false
    }
    this.values = {}
  }
  

  handleSubmit = (newValues) => {
    this.values = newValues
    const quizDone = true
    this.setState({ quizDone })
    console.log(this.state.quizDone)
    console.log(this.values) 
  }

  renderQuiz = () => {
    return (
      <Quiz
        handleSubmit={this.handleSubmit} />
    )
  }

  renderResult = () => {
    return (
      <Result
        values={this.values} />
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header__title">Growmster</h1>
          <h2 className="header__subtitle">The app that will help you grow!</h2>
        </header>
        <div>
          {this.state.quizDone ? this.renderResult() : this.renderQuiz()}
          

          
        </div>
      </div>
    );
  }
}

export default App;
