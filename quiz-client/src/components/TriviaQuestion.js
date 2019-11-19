import React from 'react';
import '../style/TriviaQuestion.css'

const TriviaQuestion = ({ data }) => {
  const questionNumber = 1;
  console.log(data)
  return (
    <div className="triviaQuestionDiv">
      <span className="questionTitle">
        {questionNumber}.
      </span>
      <span className="questionTitle"> {data[0].question}</span>

      <br />

      <span className="answerLeft">
        <label for="CheckA" className="checkboxLetter">A</label>
        <input name="checkA" type="checkbox" className="triviaCheckbox" /><span className="answerText">{data[0].wrong1}</span>
      </span>

      <span className="answer">
        <label for="CheckB" className="checkboxLetter">B</label>
        <input name="checkB" type="checkbox" className="triviaCheckbox" /><span className="answerText">{data[0].wrong2}</span>
      </span>

      <br />
      <span className="answerLeft">
        <label for="CheckC" className="checkboxLetter">C</label>
        <input name="checkC" type="checkbox" className="triviaCheckbox" /><span className="answerText">{data[0].wrong3}</span>
      </span>

      <span className="answer">
        <label for="CheckD" className="checkboxLetter">D</label>
        <input name="checkD" type="checkbox" className="triviaCheckbox" /><span className="answerText">{data[0].correct}</span>
      </span>
    </div>
  )
}

export default TriviaQuestion;