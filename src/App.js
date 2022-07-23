import './App.css';
import Home from './components/Home.component';
import {Route, Routes } from 'react-router-dom';
import Game from './components/Game.component';
import HighScores from './components/HighScores.component';
import SignIN from './components/signIN.component'
import SignUP from './components/signUP.component';
import Logwindow from './components/logWindow';
function App() {
  return (
    <div className="App">


    <Routes>
      <Route index element={<Home />} />
      <Route path='Game' element={<Game/>} />
      <Route exact path='Game/Log' element={ <Logwindow/> } />

      <Route path='HighScores' element={<HighScores />} />
    </Routes>

    </div>
  );
}

export default App;
