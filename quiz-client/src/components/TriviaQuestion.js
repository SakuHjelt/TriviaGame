import React from 'react';

const TriviaQuestion = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p className="question">{data[0].question}</p>
      <p>{data[0].choices[0]}</p>
      <p>{data[0].choices[1]}</p>
      <p>{data[0].choices[2]}</p>
      <p>{data[0].choices[3]}</p>
    </div>
  )
}

export default TriviaQuestion;