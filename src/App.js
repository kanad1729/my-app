import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterTree from './components/HookCounterTree';
import HookCounterFour from './components/HookCounterFour';
function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <br/><br/>
      <HookCounterTree/>
      <br/><br/>
      <HookCounterFour/>
    </div>
  );
}

export default App;
