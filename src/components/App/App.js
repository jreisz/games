import React, { Component } from 'react';
import Navbar from '../../../lib/santex/components/DefaultNavBar/DefaultNavBar';
import {BrowserRouter} from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import GameSetup from '../GameSetup/GameSetup';
import GameBoard from '../GameBoard/GameBoard';
import FinishedGames from '../FinishedGames/FinishedGames';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
      <div className="App">
        <Navbar/>
        <CacheSwitch>
          <CacheRoute path="/setup" component={GameSetup}/>
          <CacheRoute path="/board" component={GameBoard}/>
          <CacheRoute path="/finishedGames" component={FinishedGames}/>
        </CacheSwitch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;