import React, { useState } from 'react'


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
                <p>Hooray for humanity! You scored: {points}</p>
                <p>Now save your points!</p>
                <form>
                    <label className="fameLabel">Nick:</label>
                    <br />
                    <input className="fameInput" type='text'
                        placeholder='_ _ _ _ _ _ _ _'
                        id='fameId'
                        name="name"
                        onChange={handleNameChange}
                        required='required' />
                    <label className="yourScore">Your Score:</label>
                    <button className="fameButton"
                        type='input'
                        onClick={handleCreateClick}
                    >| To The Hall Of Fame |</button>
                </form>

            </div>
        )
}

export default HallOfFame;
