import React from 'react';
import './App.css';
import TriviaBox from './components/TriviaBox';
import Intro from './components/Intro'
import './style/App.css';

function App() {
  return (
    <div className="App">
    <TriviaBox />
    <Intro></Intro>
    </div>
    
  );
}

export default App;
