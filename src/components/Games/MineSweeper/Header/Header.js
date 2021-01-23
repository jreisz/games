import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { connect } from "react-redux";
import { setNewGame } from "../../../../store/SetUp/actions";
import { setGameStatus } from "../../../../store/MineSweeper/actions";
import { addSavedGame ,editSavedGame} from "../../../../store/SavedGames/actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setNewGame = this.setNewGame.bind(this);
    this.saveGame = this.saveGame.bind(this);
    this.loadGame = this.loadGame.bind(this);
  }

  setNewGame() {
    this.props.setGameStatus("😃");
    this.props.setNewGame(true);
  }
  loadGame() {
    this.props.loadGame(true);
  }
  saveGame() {
    const game = {
      SetUp: {
        difficulty: this.props.difficulty,
        difficultyId: this.props.difficultyId,
      },
      MineSweeper: {
        remainingFlags: this.props.remainingFlags,
        remainingNonBombCells: this.props.remainingNonBombCells,
        gameStatus: this.props.gameStatus,
        boardCells:this.props.boardCells,
      },
      startTime: this.props.startTime,
      endTime: null,
      totalSpentTime: this.props.totalSpentTime,
      status: this.props.status,
      gameId: this.props.gameId,
    };

    if (
      this.props.savedGames.find((game) => game.gameId === this.props.gameId)==null) {
      this.props.addSavedGame(game);
    } else {
      this.props.editSavedGame(game);
    }
  }

  render() {
    return (
      <>
        <Jumbotron style={{ padding: 20 }}>
          <h1 className="display-4">Welcome to Minesweeper game !</h1>
          <div className="instructions">
            You are presented with a board of squares. Some squares contain
            mines (bombs), others don't. <br />
            During the game, you'll see numbers that represent the quantity of
            neighbours squares with bombs. <br />
            <br />
            If you click on a square e containing a bomb, you lose. <br /> If
            you manage to click all the squares (without clicking on any bombs)
            you win. <br /> Mark with flags the bombs (shift+click)
          </div>
        </Jumbotron>

        <div className="newGameBtn" style={{ margin: "0px" }}>
          <Button onClick={this.saveGame} color="primary">
            Save
          </Button>
          &nbsp;&nbsp;
          <Button onClick={this.loadGame} color="primary">
            Load{" "}
          </Button>
          &nbsp;&nbsp;
          <Button onClick={this.setNewGame} color="primary">
            New Game {this.props.gameStatus}
          </Button>
        </div>

        <div>
          <div style={{ marginTop: "5px" }}>
            {" "}
            Flags left: {this.props.remainingFlags}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    remainingFlags: state.MineSweeper.remainingFlags,
    remainingNonBombCells: state.MineSweeper.remainingNonBombCells,
    startTime: state.MineSweeper.startTime,
    gameId: state.MineSweeper.gameId,
    gameStatus: state.MineSweeper.gameStatus,
    boardCells: state.MineSweeper.boardCells,
    difficulty: state.Setup.difficulty,
    difficultyId: state.Setup.difficultyId,
    totalSpentTime: state.MineSweeper.totalSpentTime,
    status: state.MineSweeper.status,
    savedGames: state.SavedGames,
  };
};
export default connect(mapStateToProps, {
  setNewGame,
  setGameStatus,
  addSavedGame,
  editSavedGame,
})(Header);
