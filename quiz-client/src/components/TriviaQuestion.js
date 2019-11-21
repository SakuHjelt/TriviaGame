import React, { useState} from 'react';
import NextButton from './NextButton';
import '../style/TriviaQuestion.css';
import '../style/PixelArnold.css';
import { Link } from 'react-router-dom';

const TriviaQuestion = ({ getPoints, history, level, answers, question, rightAnswer, questionNumber, setQuestionNumber }) => {
  const [selected, setSelected] = useState();
  const [pointCounter, setPointCounter] = useState(0);

  const onChange = (event) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  }

  const checkCorrect = () => {
    if (selected === undefined) {
      alert("You must choose!");
    } else {
      setQuestionNumber();
      if (selected.checkbox === rightAnswer) {
        setPointCounter(a => a + 1);
      }
    }
  }

  getPoints(pointCounter);

  return (
    <div className="triviaQuestionDiv">
      SkyNet [Version &#8734;&#8734;.&#8734;.&#8734;&#8734;&#8734;&#8734;&#8734;.&#8734;&#8734;&#8734;] <br />
      (c) 4019 Cyberyne Systems Corporation. All rights reserved. <br />
      C:\SkyNet <br />
      C:\SkyNet\QuestionNumber:
      <span className="questionNumber">
        {questionNumber+1}.
      </span>
      <br />
      C:\SkyNet\Score:
      <span className="questionNumber">
        {pointCounter}
      </span>

      <div className="PixelArnold"></div>

      <br />
      <br />
      C:\SkyNet\Level:
      <span className="questionNumber">
        {level}
      </span>
      <Link to="/gameover">
        <button className="PixelArnold"></button></Link>


      <br />
      <div className="allChecks">


        <br />
        <form>
          <span>
            <label for="CheckA" className="checkboxLetter">A</label>
            <input onChange={onChange} value={answers[0]} name="checkbox" placeholder="A" type="radio" className="triviaCheckbox" /><span className="answerText">{answers[0]}</span>
          </span>
          <br />
          <span>
            <label for="CheckB" className="checkboxLetter">B</label>
            <input onChange={onChange} value={answers[1]} name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{answers[1]}</span>
          </span>

          <br />
          <span>
            <label for="CheckC" className="checkboxLetter">C</label>
            <input onChange={onChange} value={answers[2]} name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{answers[2]}</span>
          </span>
          <br />
          <div>
            <label for="CheckD" className="checkboxLetter">D</label>
            <input onChange={onChange} value={answers[3]} name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{answers[3]}</span>
          </div>
        </form>
      </div>
      <div className="singleQuestion">
        <span className="questionTitle">{question}</span>
      </div>
      <NextButton btnClick={checkCorrect} />
    </div>
  )
}

export default TriviaQuestion;