import React, { Component } from 'react';
import InputRange from 'react-input-range';

import Quiz from './components/Quiz/Quiz';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header__title">Growmster</h1>
          <h2 className="header__subtitle">The app that will help you grow!</h2>
        </header>
        <div>
          
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
