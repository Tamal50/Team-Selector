import React, { useEffect, useState } from 'react';
import PlayerData from '../../data/data.json';
import Playerlist from '../Player-List/Playerlist';
import './Player.css'



const Player = () => {

       return (
        <div className="player-container">
            <div className="player-list">
                <ul>
                {
                    PlayerData.map(PData => <Playerlist PlayerData={PData}></Playerlist>)
                }
                 </ul>
            </div>  
            <div className="player-cart">
                <h1>This is cart</h1>
            </div>
        </div>
        
    );
};

export default Player;