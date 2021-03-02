import React, { useState , useEffect } from 'react';
import data from '../../data/data.json'
import Playerlist from '../Player-List/playerList';
import './player.css'

const Player = () => {
    const first15 = data.slice(0,15)
    const[player , setPlayer]= useState(first15);
    const handlePlayer = () =>{
        console.log('product added')
    }

    
    return (
        <div className = "container">
            <div className="player-container">
                <h1>Choose Player</h1>
                         
                    {
                        player.map (pt => <Playerlist
                            handlePlayer = {handlePlayer}
                             player={pt}>

                             </Playerlist>)
                    }
               
            
            </div>
            <div className="playerlist-container">
                    <h3>Final Team</h3>
                   
            </div>
        </div>
    );
};
export default Player;