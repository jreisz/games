import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { connect } from "react-redux";
import { setNewGame,setLoadGame } from "../../../../store/SetUp/actions";
import { setGameStatus } from "../../../../store/MineSweeper/actions";
import {addSavedGame,editSavedGame} from "../../../../store/SavedGames/actions";
import {STATUS } from '../../../../constants';
import {
  toMMddyyyyhhmmss,
  ssdiffMMddyyyyhhmmss,
} from "../../../../../lib/santex/utils/dateFormatter";
import {deepCopy} from '../../../../../lib/santex/utils/deepCopy'

//import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setNewGame = this.setNewGame.bind(this);
    this.saveGame = this.saveGame.bind(this);
    this.loadGame = this.loadGame.bind(this);
  }

  onMouseMove(e) {
    var delta = { x: e.clientX - md.e.clientX, y: e.clientY - md.e.clientY };

    if (direction === "V") {
      delta.y = Math.min(Math.max(delta.y, -md.firstHeight), md.secondHeight);

      element.style.left = md.offsetLeft + delta.x + "px";
      first.style.height = md.firstHeight + delta.y + "px";
      second.style.height = md.secondHeight - delta.y + "px";
    }
  }

  dragElement(element, direction) {
    var md;
    const first = document.getElementById("first");
    const second = document.getElementById("second");
  
    element.onmousedown = onMouseDown;
  
    function onMouseDown(e) {
      md = {
        e,
        offsetLeft: element.offsetLeft,
        offsetTop: element.offsetTop,
        firstHeight: first.offsetHeight,
        secondHeight: second.offsetHeight,
      };
  
      document.onmousemove = onMouseMove;
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    }
  }
  setNewGame() {
    this.props.setGameStatus("😃");
    this.props.setNewGame(true);
  }
  loadGame() {
    this.props.setLoadGame(true);
  }
  saveGame() {
    const game = {
      SetUp: {
        difficulty: this.props.difficulty,
        difficultyId: this.props.difficultyId,
      },
      savedMineSweeper: {
        remainingFlags: this.props.remainingFlags,
        remainingNonBombCells: this.props.remainingNonBombCells,
        gameStatus: this.props.gameStatus,
        savedBoardCells: deepCopy(this.props.boardCells),
      },
      startTime: this.props.startTime,
      endTime: null,
      totalSpentTime: ssdiffMMddyyyyhhmmss(
        toMMddyyyyhhmmss(new Date()),
        this.props.startTime
      ),
      status: STATUS.SAVED,
      gameId: this.props.gameId,
    };

    if (
      this.props.savedGames.find((game) => game.gameId === this.props.gameId) ==
      null
    ) {
      this.props.addSavedGame({...game});
    } else {
      this.props.editSavedGame({...game});
    }
  }
  componentDidMount() {
    this.dragElement(document.getElementById("separator"), "V");
  }
  render() {
    return (
      <div className="MinesWeeper splitter">
        <div id="first">
          <Jumbotron style={{ padding: 20 }}>
            <h1 className="display-4">Welcome to Minesweeper game !</h1>
            <div className="instructions">
              You are presented with a board of squares. Some squares contain
              mines (bombs), others don't. <br />
              During the game, you'll see numbers that represent the quantity of
              neighbours squares with bombs. <br />
              <br />
              If you click on a square e containing a bomb, you lose. <br /> If
              you manage to click all the squares (without clicking on any
              bombs) you win. <br /> Mark with flags the bombs (right click)
            </div>
          </Jumbotron>
        </div>
        <div id="separator"></div>
        <div id="second">
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
        </div>
      </div>
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
  setLoadGame,
})(Header);
