import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hello world</p>
        <ItemList />
      </div>
    );
  }
}

export default App;
