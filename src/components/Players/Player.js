import React, { useState , useEffect } from 'react';
import data from '../../data/data.json'
import Playerlist from '../Player-List/playerList';
import Team from '../Team/Team';
import './player.css'

const Player = () => {
    const first15 = data.slice(0,15)
    const[player , setPlayer]= useState(first15);
    const [club,setClub] = useState([]);
    const handlePlayer = (players) =>{
        // console.log('product added' , players)
        const newTeam = [...club, players]
        setClub(newTeam);
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
                   <Team club={club}></Team>
            </div>
        </div>
    );
};
export default Player;