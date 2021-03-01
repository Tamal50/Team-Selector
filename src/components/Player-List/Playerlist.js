import React from 'react';
import './Playerlist.css'

const Playerlist = (props) => {
    const {image, full_name, salary, team, age} = props.PlayerData;
    return (
        <div className="player">
            <div > 
                <img className="image" src={image} alt=""/>
            </div>
            <div className="details">
                <h1>Name: {full_name}</h1>
                <h2>Age: {age}</h2>
                <h3>Team: {team}</h3>
                <h4>salary: {salary}</h4>
                <button className="button">ADD</button>
            </div>
        </div>
    );
};

export default Playerlist;