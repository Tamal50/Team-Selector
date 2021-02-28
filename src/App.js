import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Players/Player';
import PlayerData from './data/data.json';
function App() {
  return (
    <div>
      
      <Header></Header>
      <Player></Player>
    </div>
  );
}
export default App;
