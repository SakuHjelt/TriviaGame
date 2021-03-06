import React, { useState, useEffect } from 'react'
import '../style/HallOfFame.css'
import musick from '../sounds/ScoreAddMusic.mp3';

const HallOfFame = ({points, history}) => {
    const [hallOfFameMusic] = useState(new Audio(musick));
    const [scorecard, setScorecard] = useState({name: '', score: 0})
    
    const handleNameChange = (e) => {
        setScorecard({...scorecard, [e.target.name]:e.target.value})
        console.dir(e.target.value)
    }

    useEffect(() => {
        hallOfFameMusic.play();
    }, [hallOfFameMusic]);

    history.listen(location => hallOfFameMusic.pause());

    const handleCreateClick = (e) => {
        e.preventDefault();
        const data = {name: scorecard.name, score: points}
        fetch('/api/questions', {
            method: "POST",
            headers: {
                "Accept": "application/json", "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
        history.push('/GameOver');
        })
    }

        return (
            <div className="addScoreDiv">
                <p>Hooray for humanity!</p>
                <p>You have destroyed SkyNet!</p>
                <form>
                    <div className="nameScore">
                    <label className="fameLabel">NAME<span className="flashingLine">:</span></label>
              
                    <input className="fameInput" type='text'
                        placeholder='_ _ _ _ _ _ _ _'
                        id='fameId'
                        name="name"
                        onChange={handleNameChange}
                        required='required' /> <br /><br />
                    <label className="yourScore">You scored: </label>
                    {points}
                    </div>
                    <button className="fameButton"
                        type='input'
                        onClick={handleCreateClick}
                    >To The Hall Of Fame</button>
                </form>

            </div>
        )
}

export default HallOfFame;
