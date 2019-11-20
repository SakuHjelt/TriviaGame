import React, { useState, useEffect } from 'react';
import TriviaBox from './TriviaBox';
import NextButton from './NextButton';
import '../style/Quiz.css';
import buttonSound from '../sounds/hastalavista.mp3';
import { fetchData } from '../serviceClient';

const Quiz = () => {
  const [hastalavista] = useState(new Audio(buttonSound));
  const [questions, setQuestions] = useState([{
  }]);
  const [questionNumber, setquestionNumber] = useState(0);

  const getData = () => {
    fetchData().then(res => setQuestions(res));
  };

  const nextQuestion = () => {

  }

  useEffect(() => {
    hastalavista.play();
    getData();
  }, [])
  console.log("Näkyykö" + questions[0].correct)

  let item = questions.map((quest))

  return (
    <div className="quizPage">
      <h1 className="quizTitle"> Arnold Schwarzenegger </h1>

      <TriviaBox data={questions} />
      <button onClick={nextQuestion}>Testinappi</button>
      <NextButton />
    </div>
  )
};

export default Quiz;