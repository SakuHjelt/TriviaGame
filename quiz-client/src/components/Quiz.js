import React from 'react';
import TriviaBox from './TriviaBox';
import NextButton from './NextButton';
import '../style/Quiz.css';

const Quiz = () => {
  return(
    <div className="quizPage">
    <h1 className="quizTitle">Schwarzenegger Quiz</h1>
      <TriviaBox />
      <NextButton />
    </div>
  )
};

export default Quiz;