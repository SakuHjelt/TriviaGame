import React from 'react';
import Quiz from './components/Quiz';
import Intro from './components/Intro';
import './style/App.css';
import GameOver from './components/GameOver'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GameOver from './components/GameOver'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;