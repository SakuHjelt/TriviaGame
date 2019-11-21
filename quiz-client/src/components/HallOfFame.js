import React, { useState } from 'react'
import '../style/HallOfFame.css'



const HallOfFame = ({points, history}) => {
    const [scorecard, setScorecard] = useState({name: '', score: 0})
    
    const handleNameChange = (e) => {
        setScorecard({...scorecard, [e.target.name]:e.target.value})
        console.dir(e.target.value)
    }

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
                    <label className="fameLabel">Term</label>
              
                    <input className="fameInput" type='text'
                        placeholder='_ _ _ _ _ _ _ _'
                        id='fameId'
                        name="name"
                        onChange={handleNameChange}
                        required='required' /> <br />
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
