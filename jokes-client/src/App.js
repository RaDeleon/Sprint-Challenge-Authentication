import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dad Jokes USA!</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
