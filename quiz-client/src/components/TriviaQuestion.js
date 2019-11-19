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
      <br/>
      <label for="CheckA" className="checkboxLetter">A</label>
      <input name="checkA" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[0]}</span>
      <br/>
      <label for="CheckB" className="checkboxLetter">B</label>
      <input name="checkB" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[1]}</span>
      <br/>
      <label for="CheckC" className="checkboxLetter">C</label>
      <input name="checkC" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[2]}</span>
      <br/>
      <label for="CheckD" className="checkboxLetter">D</label>
      <input name="checkD" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[3]}</span>
    </div>
  )
}

export default TriviaQuestion;