import React from 'react';
import  Board  from '../Board/Board.js';
import  Header  from '../Header/Header.js';

class MineSweeper extends React.Component {
  render() {
    return (
      <div className="MinesWeeper">
        <div className="App-header">
          <Header />
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}
export default MineSweeper;