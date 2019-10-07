import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Home from './home/Home';
import Header from './Header/Header';
import MainMenu from './MainMenu/MainMenu';

function App() {
  return (
    <div className="App">
      <Header data="HOME"></Header>
      <MainMenu></MainMenu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home data="HOME"></Home>
        {global.console.log('222')}
        <Home data="test"></Home>
      </header>
    </div>
  );
}

export default App;
