import React, { Component } from 'react'
import '../style/Intro.css'
import Arnold from '../pics/arnold.jpg'
import IntroMusic from '../sounds/introVer1.mp3'

export default class Intro extends Component {
    render() {
        return (
            <div className="introDiv">

            <section>
        <img src={Arnold} className="img" />
        <h1>
            <span>S</span>
            <span>C</span>
            <span>H</span>
            <span>W</span>
            <span>A</span>
            <span>R</span>
            <span>Z</span>
            <span>E</span>
            <span>N</span>
            <span>E</span>
            <span>G</span>
            <span>G</span>
            <span>E</span>
            <span>R</span>
            <br />
            <span class="quiz">QUIZ</span>
        </h1>
        <button><span>PLAY</span></button>
    </section>
            </div>
        )
    }
}
