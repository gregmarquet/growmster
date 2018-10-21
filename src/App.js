import React, { Component } from 'react';
import InputRange from 'react-input-range';

import Quiz from './components/Quiz/Quiz';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 0}
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      value: value
    })
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
            value={this.state.value}
            onValueChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
