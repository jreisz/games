import React from "react";
import Board from "../Board/Board.js";
import Header from "../Header/Header.js";
import { connect } from "react-redux";
import "./Minesweeper.scss";
 
class MineSweeper extends React.Component {
  render() {
    return (
      <div className="MinesWeeper ">
        <Header />
        <Board newGame={this.props.newGame} loadGame={this.props.loadGame} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newGame: state.Setup.newGame,
    loadGame: state.Setup.loadGame,
  };
};

export default connect(mapStateToProps)(MineSweeper);
