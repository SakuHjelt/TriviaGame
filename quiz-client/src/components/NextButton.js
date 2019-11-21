import React from 'react';
import '../style/NextButton.css'
import ButtonClick from '../sounds/ButtonClick.mp3'





const NextButton = ({btnClick}) => {
  
  return(
    <div>
      <button onClick={btnClick} className="nextButton">| Next Question |</button>
      
    </div>
  )
}

export default NextButton;