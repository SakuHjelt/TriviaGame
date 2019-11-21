import React from 'react';
import '../style/NextButton.css'






const NextButton = ({btnClick}) => {
  
  return(
    <div>
      <button onClick={btnClick} className="nextButton">| Next Question |</button>
      
    </div>
  )
}

export default NextButton;