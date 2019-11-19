import React, {useState, useEffect} from 'react';
import TriviaBox from './TriviaBox';
import NextButton from './NextButton';
import '../style/Quiz.css';
import buttonSound from '../sounds/hastalavista.mp3';

const Quiz = () => {
  const [hastalavista] = useState(new Audio(buttonSound));

  useEffect(() => {
    hastalavista.play();
}, [])

  return(
    <div className="quizPage">
    <h1 className="quizTitle">Schwarzenegger Quiz</h1>
      <TriviaBox />
      <NextButton />
    </div>
  )
};

export default Quiz;