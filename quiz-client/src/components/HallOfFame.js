// import React, { Component } from 'react'
// import '..style/HallOfFame.css'
// import {  } from './TriviaQuestion'
// export default class HallOfFame extends Component {
//     state = { name: '', score: { count } }
//     handleNameChange = (e) => {
//         this.setState({ name: e.targetvalue })
//     }
//     handleCreateClick = e => {
//         e.preventDefault();
//         PostScore(this.state).then(response => {
//             this.setState({ name: 'name', score: '' });
//             this.props.history.push('/GameOver');
//         })
//     }
//     render() {
//         return (
//             <div className="addScoreDiv">
//                 <form>
//                     <label className="fameLabel">Name:</label>
//                     <br />
//                     <input className="fameInput" type='text'
//                         placeholder='_ _ _ _ _ _ _ _'
//                         id='fameId'
//                         value={this.state.name}
//                         onChange={this.handleNameChange}
//                         required='required' />
//                     <label className="yourScore">Your Score:</label>
//                     <button className="fameButton"
//                         type='input'
//                         onClick={this.handleCreateClick}
//                     >| To The Hall Of Fame |</button>
//                 </form>
//             </div>
//         )
//     }
// }
