import React, { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import VideoGames from './screens/VideoGames';
import { GameContext } from './GameContext';
import Contact from './screens/Contact';

function App() {

  const { loading} = useContext(GameContext)
    
    if (loading) {
        return <h2 className="loading">Loading...</h2>;
    }

  return (
    <Router>
      
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <VideoGames />
        </Route>
      </Switch>
  
    </Router>
  );
}

export default App;
