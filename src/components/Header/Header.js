import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h2>Choose your player, Make your dream team</h2>
            <nav>           
                <a href="/Home">Home</a>
                <a href="/Players">Players</a>
                <a href="/Your-Team">Your Team</a>
            </nav>
        </div>
    );
};

export default Header;