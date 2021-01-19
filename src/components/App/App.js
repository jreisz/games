import React, { Component } from 'react';
import Navbar from '../../../lib/santex/components/DefaultNavBar/DefaultNavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import GameSetup from '../GameSetup/GameSetup';
import GameBoard from '../GameBoard/GameBoard';
import FinishedGames from '../FinishedGames/FinishedGames';
import './App.scss';

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