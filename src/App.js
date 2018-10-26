import React, { Component } from 'react';

import Quiz from './components/Quiz/Quiz';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizDone: false
    }
  }

  handleSubmit = () => {
    const quizDone = true
    this.setState({ quizDone })
    console.log(this.state.quizDone)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header__title">Growmster</h1>
          <h2 className="header__subtitle">The app that will help you grow!</h2>
        </header>
        <div>
          
          <Quiz 
            handleSubmit= {this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
