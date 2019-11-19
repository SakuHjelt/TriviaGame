import React from 'react';

const TriviaQuestion = ({ data }) => {
  const questionNumber = 1;
  console.log(data)
  return (
    <div>
      <span className="questionTitle">
        {questionNumber}. 
      </span>
      <span className="questionTitle"> {data[0].question}</span>
      <br/>
      <input name="checkA" type="checkbox"/><span className="answerText">{data[0].choices[0]}</span>
      <input name="checkB" type="checkbox"/><span className="answerText">{data[0].choices[1]}</span>
      <br/>
      <input name="checkC" type="checkbox"/><span className="answerText">{data[0].choices[2]}</span>
      <input name="checkD" type="checkbox"/><span className="answerText">{data[0].choices[3]}</span>
    </div>
  )
}

export default TriviaQuestion;