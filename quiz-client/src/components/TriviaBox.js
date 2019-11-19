import React from 'react';
import '../style/TriviaBox.css';
import TriviaQuestion from './TriviaQuestion';

const TriviaBox = ({data}) => {
  return (
    <div>
      <div className="questionbox">
      <TriviaQuestion data={data}/>
      <p></p>
      </div>
    </div>
  )
};

export default TriviaBox;