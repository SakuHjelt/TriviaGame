import React, { useState, useEffect } from 'react';
import TriviaBox from './TriviaBox';
import '../style/Quiz.css';
import buttonSound from '../sounds/hastalavista.mp3';
import { fetchData } from '../serviceClient';
import HallOfFame from './HallOfFame'

const Quiz = ({ history }) => {
  const [hastalavista] = useState(new Audio(buttonSound));
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
    hastalavista.play();
    getData();
  }, [hastalavista])

  //Tarkista, että antaa oikean pistemäärän eikä esim. yksi liian vähän
  const getPoints = (pointsis) => {
    setPoints(pointsis);
  }
  //Miten saada 10 kysymystä? Kaatuu, jos < 10 - ei tunnista yllä enää arraysta indeksejä, tietenkään
  if (questionNumber < 9) {
  return (
    <div className="quizPage">

      <h1 className="quizTitle">
´,´,´_________ ´,´,´´,.__ ´,´,´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´´,´,´ <br />                              
´,´,/   _____/´,´,´´,´|__|__´__´_´,´_______´,_______´________´,____´,´,____´,´,____´,´,____´,´,____´,´,____ _______ <br />
´,´,\_____  \´_/ ___\´|´,|´,\\´\/´\/´/\__´,\´\_´,__´\\___´,´/_/´__´\´/    \´_/´__´,\´´/ ___\´,/ ___\_/´__´´\\_´,__´\<br />
´,´,/´,´,´´,´\\´\___´´|´,Y ´,\\´,´,´/´,/´__´\_|´,|´\/´/´,´,/´\´´___/´|´,´|´\\´,´___/´/´/_/´,>/´/_/´>\´,´___/´|  |´\/<br />
´,´/_______´,/´\___´,>|___|´,/´\/\_/´,'('____´,/|__|´,´/_____´\´\___´,>|___|´/ \___´,´>\___´,/ \___´,/´,\___´,>|__|´,´   <br />
  ´,´,´´,´,\/´,´,´´\/´,´,´´\/´,´,´´,´,´´,´,\/´,´,´´,´,´´,´,\/´,´,´\/´,´,´\/´,´,´´,\//_____/´/_____/´,´,´´,\/´,´,´    <br />
      </h1>

      <TriviaBox getPoints={getPoints} history={history} setQuestionNumber={() => setQuestionNumber(a => a + 1)} questionNumber={questionNumber} answers={shuffled} question={question} rightAnswer={rightAnswer} level={questions[questionNumber].level} />

    </div>
  )
}

return <HallOfFame history={history} points={points}/>
};

export default Quiz;