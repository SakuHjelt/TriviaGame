import React from 'react';
import '../style/TriviaQuestion.css'
import '../style/PixelArnold.css'

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
      <p className="singleQuestion">
      <span className="questionTitle"> {data[0].question}</span>

      <div className="PixelArnold"></div>
      </p>
      <br/>
      <div className="allChecks">
      
      <br/>
        
      <span className="answerLeft">
        <label for="CheckA" className="checkboxLetter">A</label>
        <input name="checkA" placeholder="A" type="checkbox" className="triviaCheckbox" /><span className="answerText">{data[0].wrong1}</span>
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
    </div>
  )
}

export default TriviaQuestion;