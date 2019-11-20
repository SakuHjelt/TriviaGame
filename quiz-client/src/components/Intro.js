import React, {useState, useEffect} from 'react'
import '../style/Intro.css'
import Arnold from '../pics/arnold.jpg'
import introMusic from '../sounds/introVer1.mp3';
import { Link } from 'react-router-dom';

const Intro = () => {
    const [introAudio] = useState(new Audio(introMusic));

    useEffect(() => {
        introAudio.play();
    }, [])

    return (
        <div className="introDiv">
            <section className="introSection">
                <img src={Arnold} className="introImg" />
                <h1 className="introH1">
                    <span className="introSpan">S</span>
                    <span className="introSpan">C</span>
                    <span className="introSpan">H</span>
                    <span className="introSpan">W</span>
                    <span className="introSpan">A</span>
                    <span className="introSpan">R</span>
                    <span className="introSpan">Z</span>
                    <span className="introSpan">E</span>
                    <span className="introSpan">N</span>
                    <span className="introSpan">E</span>
                    <span className="introSpan">G</span>
                    <span className="introSpan">G</span>
                    <span className="introSpan">E</span>
                    <span className="introSpan">R</span>
                    <br />
                    <h1 className="introH1Quiz">
                    <span className="introQuiz">QUIZ</span>
                    </h1>
                </h1>
                <Link to="/quiz"><button className="introButton"><span className="introSpan">PLAY</span></button></Link>
            </section>
        </div>
    )
}


export default Intro;