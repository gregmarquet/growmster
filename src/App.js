import React, { Component } from 'react';
import Quiz from './components/Quiz/Quiz';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Growmster</h1>
          <h2>The app that will help you grow!</h2>
        </header>
        <div>
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
