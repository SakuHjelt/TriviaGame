import React, { useState, useEffect } from 'react';
import '../style/TriviaBox.css';
import TriviaQuestion from './TriviaQuestion';
import { fetchData } from '../serviceClient';

const TriviaBox = () => {
    const [questions, setQuestions] = useState([]);

    const data = [{
        question: "Arska?",
        choices: ["bluu", "blaa", "bloo", "oikea"],
        right: "oikea"
    }]

    const getData = () => {
        fetchData(res => setQuestions(res))
    };

    useEffect(() => {
        getData();
    }, [])

    return ( <div>
        <h1>
             Arnold Schwarzenegger Quiz </h1> <div className = "questionbox" >
        <TriviaQuestion data = { data }/> <p> { questions } </p> </div> </div>
    )
};

export default TriviaBox;