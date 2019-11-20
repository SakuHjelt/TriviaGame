import React, { useState, useEffect } from 'react';
import TriviaBox from './TriviaBox';
import NextButton from './NextButton';
import '../style/Quiz.css';
import buttonSound from '../sounds/hastalavista.mp3';
import { fetchData } from '../serviceClient';

const Quiz = () => {
  const [hastalavista] = useState(new Audio(buttonSound));
  const [questions, setQuestions] = useState([{
    question: "A little question for you:",
    choices: ["o","a","a","r"]
  }]);

  const getData = () => {
    fetchData().then(res => setQuestions(res));
  };

  useEffect(() => {
    hastalavista.play();
    getData();
  }, [])
  console.log(questions)

  return (
    <div className="quizPage">
      <h1 className="quizTitle"> Arnold Schwarzenegger </h1>

      <TriviaBox data={questions} />
      <NextButton />
    </div>
  )
};

export default Quiz;