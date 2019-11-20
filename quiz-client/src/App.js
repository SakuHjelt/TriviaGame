import React from 'react';
import Quiz from './components/Quiz';
import Intro from './components/Intro';
import './style/App.css';
import GameOver from './components/GameOver'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/quiz" render={props => <Quiz {...props} />} />
          <Route exact path="/gameover" component={GameOver} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;