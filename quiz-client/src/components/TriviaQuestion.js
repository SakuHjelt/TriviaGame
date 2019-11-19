import React from 'react';
import '../style/TriviaQuestion.css'

const TriviaQuestion = ({ data }) => {
  const questionNumber = 1;
  console.log(data)
  return (
    <div className="triviaQuestionDiv">
      SkyNet [Version &#8734;&#8734;.&#8734;.&#8734;&#8734;&#8734;&#8734;&#8734;.&#8734;&#8734;&#8734;] <br />
      (c) 4019 SkyNet Corporation. All rights reserved. <br />
      C:\SkyNet <br />
      C:\SkyNet\QuestionNumber:
      <span className="questionNumber">
        {questionNumber}. 
      </span>
      <span className="questionTitle"> {data[0].question}</span>
      <br/>
      <div className="allChecks">
        
      <label for="CheckA" className="checkboxLetter">A</label>
      <input name="checkA" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[0]}</span>
     
      <label for="CheckB" className="checkboxLetter">B</label>
      <input name="checkB" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[1]}</span>
      <br/>
      <label for="CheckC" className="checkboxLetter">C</label>
      <input name="checkC" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[2]}</span>

      <label for="CheckD" className="checkboxLetter">D</label>
      <input name="checkD" type="checkbox" className="triviaCheckbox"/><span className="answerText">{data[0].choices[3]}</span>
    </div>
    </div>
  )
}

export default TriviaQuestion;