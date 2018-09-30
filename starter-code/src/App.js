import React, { Component } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>IronContacts</Header>
        <CardContainer>
        </CardContainer>
      </div>
    );
  }
}

export default App;
