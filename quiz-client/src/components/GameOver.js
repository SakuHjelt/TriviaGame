import React, {useState, useEffect} from 'react'
import '../style/GameOver.css'
import Arnold from '../pics/arnold.jpg'
import GameOverMusic from '../sounds/GameOverMusic.mp3';

const GameOver = () => {
    const [gameOverAudio] = useState(new Audio(GameOverMusic));

    useEffect(() => {
        gameOverAudio.play();
    }, [])

    return (
        <div className="gameoverDiv">
               <h2 class="gameoverH2">-GAME OVER-</h2>
                <section className="gameoverSection">
            <img src={Arnold} className="introImg" />
        <h1 className="gameoverH1">
            <span className="gameoverSpan">Credits:</span>
            <span className="gameoverSpan">Anna, </span>
            <span className="gameoverSpan">Kaarle, </span>
            <span className="gameoverSpan">Maria, </span>
            <span className="gameoverSpan">Saku</span>
        </h1>

    </section>
    </div>
    )
}

export default GameOver;