import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFutbol } from '@fortawesome/free-solid-svg-icons'
import './playerList.css'

const Player = (props) => {
    const {image, name, salary, team, age} = props.player;
    return (
        <div className="player">
        <div > 
            <img className="image" src={image} alt=""/>
        </div>
        <div className="details">
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Team: {team}</h3>
            <h4>salary: {salary}</h4>
            <button
             className="button btn btn-danger"
             onClick={() => props.handlePlayer(props.player)}
             >          <FontAwesomeIcon icon={faFutbol} />ADD TO TEAM</button>
        </div>
    </div>
    );
};

export default Player;