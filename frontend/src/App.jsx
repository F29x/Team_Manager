
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayersList from './components/PlayersList'; 
import AddPlayer from './components/AddPlayer'; 
import Central from './views/Central';
import PlayerStatus from './extras/PlayerStatus';
import Game1 from './extras/Game1';
import Game2 from './extras/Game2';
import Game3 from './extras/Game3';
function App() {
  return (
    <Router>
      <Central/>
      <div>
        <Routes>
          <Route path="/" element={<PlayersList />} />
          <Route path="/add-player" element={<AddPlayer />} />
          <Route path='/player-status' element={<PlayerStatus/>}/>
          <Route path="/game1" element={<Game1/>}></Route>
            <Route path="/game2" element={<Game2/>}></Route>
            <Route path="/game3" element={<Game3/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
