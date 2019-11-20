import React, { useState } from 'react';
import NextButton from './NextButton';
import '../style/TriviaQuestion.css'
import '../style/PixelArnold.css'

const TriviaQuestion = ({ answers, question, rightAnswer, questionNumber, setQuestionNumber }) => {
  const [selected, setSelected] = useState();
  const [pointCounter, setPointCounter] = useState(0);
 /*  const [questionNumber, setQuestionNumber] = useState(0);

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
  const shuffled = shuffle(answers); */

  const onChange = (event) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  }

  const checkCorrect = () => {
    console.log("selected: ", selected)
    if (selected === undefined) {
      alert("You must choose!");
    } else {
      setQuestionNumber();
      if (selected.checkbox === rightAnswer) {
        setPointCounter(a => a + 1);
        console.log(pointCounter)
      }
      console.log(pointCounter)
    }
  }

  return (
    <div className="triviaQuestionDiv">
      SkyNet [Version &#8734;&#8734;.&#8734;.&#8734;&#8734;&#8734;&#8734;&#8734;.&#8734;&#8734;&#8734;] <br />
      (c) 4019 SkyNet Corporation. All rights reserved. <br />
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
      <p className="singleQuestion">
        <span className="questionTitle">{question}</span>

        <div className="PixelArnold"></div>
      </p>
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
      <NextButton btnClick={checkCorrect} />
    </div>
  )
}

export default TriviaQuestion;