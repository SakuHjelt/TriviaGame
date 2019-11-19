import React, { Component } from 'react'
import '../style/Intro.css'
import Arnold from '../pics/arnold.jpg'
import IntroMusic from '../sounds/introVer1.mp3'

export default class Intro extends Component {
    render() {
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
            <span className="introSpan">QUIZ</span>
        </h1>
        <button className="introButton"><span className="introSpan">PLAY</span></button>
    </section>
            </div>
        )
    }
}
