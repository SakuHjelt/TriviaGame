import React, { useState } from 'react';
import NextButton from './NextButton';
import '../style/TriviaQuestion.css';
import '../style/PixelArnold.css';
import { Link } from 'react-router-dom';

const TriviaQuestion = ({ getPoints, history, level, answers, question, rightAnswer, questionNumber, setQuestionNumber }) => {
  const [selected, setSelected] = useState();
  const [pointCounter, setPointCounter] = useState(0);
/*   const [checked, setChecked] = useState({checked: false});

  const checkIt = () => {
    setChecked({checked: true});
  };

  const unCheckIt = () => {
    setChecked({checked: false})
  }
 */
  const onChange = (event) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  }

  const checkCorrect = () => {
    if (question === "I wanna ask you a bunch of questions...") {
      alert('"I am not done talking yet!" -Schwarzenegger')
    } else {
      if (selected === undefined) {
        alert("You must choose!");
      } else {
        setQuestionNumber();
        if (selected.checkbox === rightAnswer) {
          setPointCounter(a => a + 1);
        }
        setSelected();
      }
    }
  }
  getPoints(pointCounter);

return (
  <div className="triviaQuestionDiv">
  SkyNet [Version &#8734;&#8734;.&#8734;.&#8734;&#8734;&#8734;&#8734;&#8734;.&#8734;&#8734;&#8734;] <br />
  (c) @ 80's Cyberdyne Systems Corporation. All rights reserved. <br />
  C:\SkyNet
  <br />
  <br />
  C:\SkyNet\QuestionNumber:
<span className="questionNumber">
    {questionNumber}.
</span>
  <div className="PixelArnold"></div>
  <br />
  C:\SkyNet\QuestionDifficulty:
<span className="questionNumber">
    level {level}
  </span>
  {/*       <Link to="/gameover">
  <button className="PixelArnold"></button></Link> */}
  <br />
  <br />
  C:\SkyNet\Score:
<span className="questionNumber">
    {pointCounter}
  </span>
    <div className="allChecks">

      <br />
      <form>
        <span>
          <label for="CheckA" className="checkboxLetter">A </label>
          <button id="CheckA" onClick={onChange} value={answers[0]} name="checkbox" placeholder="A" type="button" className="triviaCheckbox"></button><span className="answerText">{answers[0]}</span>
        </span>
        <br />
        <span>
          <label for="CheckA" className="checkboxLetter">B </label>
          <button id="CheckA" onClick={onChange} value={answers[1]} name="checkbox" placeholder="A" type="button" className="triviaCheckbox"></button><span className="answerText">{answers[1]}</span>
          
        </span>
        <br />
        <span>
          <label for="CheckA" className="checkboxLetter">C </label>
          <button id="CheckA" onClick={onChange} value={answers[2]} name="checkbox" placeholder="A" type="button" className="triviaCheckbox"></button><span className="answerText">{answers[2]}</span>
          
        </span>
        <br />
        <div>
        <span>
          <label for="CheckA" className="checkboxLetter">D </label>
          <button id="CheckA" onClick={onChange} value={answers[3]} name="checkbox" placeholder="A" type="button" className="triviaCheckbox"></button><span className="answerText">{answers[3]}</span>
          
        </span>
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