import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Home from './home/Home';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header data="HOME"></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home data="HOME"></Home>

        <Home data="test"></Home>
      </header>
    </div>
  );
}

export default App;
