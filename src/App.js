import React from 'react';
import './App.sass';
import Header from './Header/Header';
import MainRouter from './Router/Router';

function App() {
  return (
    <div className="App">
      <Header data="HOME"></Header>
      <MainRouter></MainRouter>
    </div>
  );
}

export default App;
