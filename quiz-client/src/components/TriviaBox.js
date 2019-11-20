import React from 'react';
import '../style/TriviaBox.css';
import TriviaQuestion from './TriviaQuestion';

const TriviaBox = ({question, answers, rightAnswer, questionNumber, setQuestionNumber}) => {
  return (
    <div>
      <div className="questionbox">
      <TriviaQuestion setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} answers={answers} question={question} rightAnswer={rightAnswer} />
      <p></p>
      </div>
    </div>
  )
};

export default TriviaBox;