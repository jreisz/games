import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import GameSetup from './components/GameSetup/GameSetup';
import GameBoard from './components/GameBoard/GameBoard';
import FinishedGames from './components/FinishedGames/FinishedGames';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/setup" component={GameSetup}/>
          <Route path="/board" component={GameBoard}/>
          <Route path="/finishedGames" component={FinishedGames}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;