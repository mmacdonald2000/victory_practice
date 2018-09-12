import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TutorialChart from './TutorialChart';
import NewChart from './NewChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TutorialChart height={400} width={600} />
        <NewChart height={800} width={800} />
      </div>
    );
  }
}

export default App;
