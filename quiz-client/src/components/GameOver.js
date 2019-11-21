import React, {useState, useEffect} from 'react'
import '../style/GameOver.css'
import GameOverImg from '../pics/gameover.jpg'
import GameOverMusic from '../sounds/GameOverMusic.mp3';
import Score from './Score';
import { Link } from 'react-router-dom'

const GameOver = (props) => {
    const [gameOverAudio] = useState(new Audio(GameOverMusic));
    //const pointcounter = props.match.params.no 

    useEffect(() => {
        gameOverAudio.play();
        
    }, [gameOverAudio])

    return (
        <div className="gameoverDiv">
               <h2 className="gameoverH2">-GAME OVER-</h2>
               <div className="score">
               <Score/>
               </div>
                <section className="gameoverSection">
            <img alt="gameoverImg" src={GameOverImg} className="gameoverImg" />
        <h1 className="gameoverH1">
            <span className="gameoverSpan">Credits:</span>
            <span className="gameoverSpan">Anna, </span>
            <span className="gameoverSpan">Maria, </span>
            <span className="gameoverSpan">Kaarle, </span>
            <span className="gameoverSpan">Saku</span>
        </h1>
          </section>
          <Link to="/quiz"><button className="playAgainButton"><span className="introSpan">|-PLAY AGAIN-|</span></button></Link>
       </div>
    )
}

export default GameOver;