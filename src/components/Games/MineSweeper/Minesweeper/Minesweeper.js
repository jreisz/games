import React from 'react';
import  Board  from '../Board/Board.js';
import  Header  from '../Header/Header.js';
import { connect } from "react-redux";

class MineSweeper extends React.Component {
  render() {
    return (
      <div className="MinesWeeper">
        <div className="App-header">
          <Header  />
        </div>
        <div>
          <Board newGame={this.props.newGame} loadGame={this.props.loadGame}/> 
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newGame: state.Setup.newGame,
  };
};

export default connect(mapStateToProps)(MineSweeper);
