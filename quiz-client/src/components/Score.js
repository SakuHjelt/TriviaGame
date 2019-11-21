import React, { Component } from 'react'
import '../style/Score.css';
import { fetchScores } from '../serviceClient';

export default class Score extends Component {
    state = { scores: [] }

    componentDidMount() {
        this.fetchScoreList();
    }
    fetchScoreList = () => {
        fetchScores().then(scores => {
            this.setState({ scores });
            console.log(scores);
        })
    }


    render() {
        return (
                <table>
                    <th>Name</th><th>Score</th>
                <tbody>
                    {
                    this.state.scores.map((item) =>{
                    return <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                        </tr>
                    })
                    }
                    </tbody>
                </table>
        )
    }
}
