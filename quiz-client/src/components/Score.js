import React, { Component } from 'react'
import '../style/Score.css';

export default class Score extends Component {
    render() {
        return (
            <div className="score">
                <table>
                    <td>Terminator</td>
                    <td>Score</td>
                    <tbody>
                        <td>{this.props.terminator}</td>
                        <td>{this.props.score}</td>
                    </tbody>
                </table>
            </div>
        )
    }
}
