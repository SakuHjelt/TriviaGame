import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/FirstPage.css'

export default class FirstPage extends Component {
    render() {
        return (
            <div className="introBody">
                <div>
                    <img className="skynet" src="https://ei.marketwatch.com/Multimedia/2018/02/13/Photos/ZH/MW-GD647_skynet_20180213113524_ZH.jpg?uuid=e41f2218-10db-11e8-b127-9c8e992d421e"></img>
                    <Link to="/intro"><button className="firstButton">You are probably using Google Chrome. Therefore you must press this button.</button> </Link>
                </div>
            </div>
        )
    }
}
