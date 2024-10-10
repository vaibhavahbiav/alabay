import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import GameOne from './components/GamePages/GameOne';
import GameTwo from './components/GamePages/GameTwo';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/game-one" Component={GameOne} />
          <Route path="/game-two" Component={GameTwo} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
