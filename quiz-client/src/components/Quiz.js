import React, { useState, useEffect } from 'react';
import TriviaBox from './TriviaBox';
import '../style/Quiz.css';
import questionMusic from '../sounds/questionMusic.mp3';
import { fetchData } from '../serviceClient';
import HallOfFame from './HallOfFame'

const Quiz = ({ history }) => {
  const [music] = useState(new Audio(questionMusic));
  const [questions, setQuestions] = useState([{

    question: "A little question for you:",
    options: ["a", "b", "c", "d"]

  }]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const question = questions[questionNumber].question;
  const rightAnswer = questions[questionNumber].correct;
  const answers = [questions[questionNumber].q1, questions[questionNumber].q2, questions[questionNumber].q3, questions[questionNumber].q4];

  const shuffle = (arr) => {
    let i,
      j,
      temp;
    for (i = answers.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  const shuffled = shuffle(answers);

  const getData = () => {
    fetchData().then(res => setQuestions(res));
  };

  useEffect(() => {
    music.play();
    getData();
  }, [music])

  //Tarkista, että antaa oikean pistemäärän eikä esim. yksi liian vähän
  const getPoints = (pointsis) => {
    setPoints(pointsis);
  }
  
  //Miten saada 10 kysymystä? Kaatuu, jos < 10 - ei tunnista yllä enää arraysta indeksejä, tietenkään
  if (questionNumber < 10) {
  return (
    <div className="quizPage">

      <h1 className="quizTitle">
        JOKU HIENO OTSIKKO
      </h1>

      <TriviaBox getPoints={getPoints} history={history} setQuestionNumber={() => setQuestionNumber(a => a + 1)} questionNumber={questionNumber} answers={shuffled} question={question} rightAnswer={rightAnswer} level={questions[questionNumber].level} />

    </div>
  )
}

return <HallOfFame history={history} points={points}/>
};

export default Quiz;