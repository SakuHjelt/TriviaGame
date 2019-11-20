import React, { useState } from 'react';
import NextButton from './NextButton';
import '../style/TriviaQuestion.css';
import '../style/PixelArnold.css';
import { Link } from 'react-router-dom';

const TriviaQuestion = ({ data }) => {
  const [selected, setSelected] = useState();
  const [pointCounter, setPointCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const question = data[questionNumber].question;
  const answers = [data[questionNumber].q1, data[questionNumber].q2, data[questionNumber].q3, data[questionNumber].q4];

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

  const onChange = (event) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  }

  const checkCorrect = () => {
    console.log("selected: ", selected)
    if (selected === undefined) {
      alert("You must choose!");
    } else {
      setQuestionNumber(b => b + 1);
      if (selected.checkbox === "neljä") {
        setPointCounter(a => a + 1);
        console.log(pointCounter)
      }
      console.log(pointCounter)
    }
  }

  return (
    <div className="triviaQuestionDiv">
      SkyNet [Version &#8734;&#8734;.&#8734;.&#8734;&#8734;&#8734;&#8734;&#8734;.&#8734;&#8734;&#8734;] <br />
      (c) 4019 Cyberyne Systems Corporation. All rights reserved. <br />
      C:\SkyNet <br />
      C:\SkyNet\QuestionNumber:
      <span className="questionNumber">
        {questionNumber}.
      </span>
      <br />
      C:\SkyNet\Score:
      <span className="questionNumber">
        {pointCounter}
      </span>
      <Link to="/gameover">
        <button className="PixelArnold"></button></Link>
      
      <br />
      <div className="allChecks">


        <br />
        <form>
          <span>
            <label for="CheckA" className="checkboxLetter">A</label>
            <input onChange={onChange} value="yksi" name="checkbox" placeholder="A" type="radio" className="triviaCheckbox" /><span className="answerText">{shuffled[0]}</span>
          </span>
          <br />
          <span>
            <label for="CheckB" className="checkboxLetter">B</label>
            <input onChange={onChange} value="kaksi" name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{shuffled[1]}</span>
          </span>

          <br />
          <span>
            <label for="CheckC" className="checkboxLetter">C</label>
            <input onChange={onChange} value="kolme" name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{shuffled[2]}</span>
          </span>
          <br />
          <div>
            <label for="CheckD" className="checkboxLetter">D</label>
            <input onChange={onChange} value="neljä" name="checkbox" type="radio" className="triviaCheckbox" /><span className="answerText">{shuffled[3]}</span>
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