import React from 'react';
import '../style/TriviaBox.css';
import TriviaQuestion from './TriviaQuestion';

const TriviaBox = ({ history, level, question, answers, rightAnswer, questionNumber, setQuestionNumber, getPoints }) => {
  return (
    <div>
      <div className="questionbox">
        <TriviaQuestion getPoints={getPoints} history={history} level={level} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} answers={answers} question={question} rightAnswer={rightAnswer} />
        <p></p>
      </div>
    </div>
  )
};

export default TriviaBox;