import React, {useState, useEffect} from 'react';
import '../style/TriviaBox.css';
import TriviaQuestion from './TriviaQuestion';
import { fetchData } from '../serviceClient';

const TriviaBox = () => {
    const [questions, setQuestions] = useState([]);

    const data = [{
        question: "Arnold Schwarzenegger is one of the coolest guys in the world. Why is that?",
        choices: ["He is the coolest", "The coolest he is", "Stupid question", "Question dumb it is"],
        right: "oikea"
    }]

    const getData = () => {
        fetchData(res => setQuestions(res))
    };

    useEffect(() => {
        getData();
    }, [])

  return (
    <div>
      <div className="questionbox">
      <TriviaQuestion data={data}/>
      <p>{questions}</p>
      </div>
    </div>
  )
};

export default TriviaBox;