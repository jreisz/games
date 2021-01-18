import React from 'react';
import { Board } from '../Board/Board.js';
import { Header } from '../Header/Header.js';

class MinesWeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      boardHeight:10,
      boardWidth:10,
      boardMines:10,
      numberOfFlags:10,
      newGame:false
    }

    this.getGameSettingsFromHeader = this.getGameSettingsFromHeader.bind(this);
    this.handleFlagClick = this.handleFlagClick.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.initFlags = this.initFlags.bind(this);
  }

    getGameSettingsFromHeader(gameSettings){
      this.setState({boardHeight: gameSettings.boardHeight, 
        boardWidth: gameSettings.boardWidth, boardMines: gameSettings.boardMines, newGame: true},
        () => {
        this.setState({ newGame: false});
    })
  }

  handleWin(){
    this.initFlags();
    alert('You win!');
  }

  initFlags(){
    this.setState({numberOfFlags: this.state.boardMines});
  }

  handleFlagClick(isFlagged){
    const flags = isFlagged ? this.state.numberOfFlags - 1 : this.state.numberOfFlags + 1;
    this.setState({ numberOfFlags: flags });    
  }

  render() {
    return (
      <div className="MinesWeeper">
        <div className="App-header">
          <Header initFlags={this.initFlags} 
                  newGameHandler={this.getGameSettingsFromHeader} 
                  boardFlags={this.state.numberOfFlags} />
        </div>
        <div>
          <Board boardHeight={this.state.boardHeight} 
                 boardWidth={this.state.boardWidth} 
                 boardMines={this.state.boardMines} 
                 handleFlagClick={this.handleFlagClick}
                 handleWin={this.handleWin}
                 boardUsedFlags={this.state.numberOfFlags}
                 initFlags={this.initFlags}
                 newGame={this.state.newGame}/>
        </div>
      </div>
    );
  }
}

export {MinesWeeper};
