import React from 'react';

const Team = (props) => {
    const Team = props.club;
    console.log(Team)
    const name = Team.name
    let total =0
    for (let i = 0; i < Team.length; i++) {
        const players = Team[i];
        console.log(players)
        total = total + players.salary   
     }
     let playerName = ""
     for (let i = 0; i < Team.length; i++) {
         let name = Team[i].name;
         console.log(name)
         playerName += name + ", "
         
     }
    return (
        <div>
             <h1>Total cost : {total}</h1>
             <h1>Selected player : {playerName}</h1>
             <h1>Total selected player : {Team.length}</h1>
        </div>
    );
};

export default Team;