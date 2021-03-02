import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Players/player';

import { useState , useEffect } from 'react';
import data from './data/data.json'

function App () {
  const [players, setPlayers] = useState ([]);

  useEffect(()=>{
    setPlayers(data)
    }, [])
  return (
    <div>     
      <Header></Header>
      <Player></Player>    
    </div>
  )}



export default App;
