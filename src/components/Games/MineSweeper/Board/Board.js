import React from "react";
import { Cell } from "../Cell/Cell.js";
import { connect } from "react-redux";
import {
  setRemainingFlags,
  setBoardCells,
  setStartTime,
  setRemainingNonBombCells,
  setGameStatus,
  setGameId,
} from "../../../../store/MineSweeper/actions";
import {
  addSavedGame,
  editSavedGame,
} from "../../../../store/SavedGames/actions";
import { setNewGame } from "../../../../store/SetUp/actions";
import {
  toMMddyyyyhhmmss,
  ssdiffMMddyyyyhhmmss,
} from "../../../../../lib/santex/utils/dateFormatter";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: `${this.getContainerHeight()}`,
      containerWidth: `${this.getContainerWidth()}`,
    };

    this.mineClicked = this.mineClicked.bind(this);
    this.flagClicked = this.flagClicked.bind(this);
    this.revealCells = this.revealCells.bind(this);
    this.runOnNeighbors = this.runOnNeighbors.bind(this);
  }

  componentDidMount() {
    this.buildBoard();
  }

  getContainerHeight() {
    try {
      return window.innerHeight - 150;
    } catch (e) {
      return 100;
    }
  }

  getContainerWidth() {
    try {
      return window.innerWidth - 150;
    } catch (e) {
      return 100;
    }
  }

  buildBoard() {
    let boardCells = [],
      minesArray = [];
    boardCells = this.createBoard();
    minesArray = this.shuffleMines(boardCells);
    this.fillMinesInBoardAndAddValueToNeighbors(boardCells, minesArray);

    this.props.setStartTime();
    this.props.setBoardCells(boardCells);
    this.props.setRemainingFlags(this.props.mines);
    this.props.setRemainingNonBombCells(
      this.props.width * this.props.height - this.props.mines
    );
    this.props.setNewGame(false);
  }
  loadBoard(boardCells) {
    this.props.setBoardCells(boardCells);
    this.props.setRemainingFlags(this.props.mines);
    this.props.setRemainingNonBombCells();
    this.props.loadGame(false);
  }
  createBoard() {
    let boardCells = [];
    for (let i = 0; i < this.props.height; i++) {
      boardCells[i] = [];
      for (let j = 0; j < this.props.height; j++) {
        boardCells[i][j] = {
          mine: false,
          flag: false,
          value: 0,
          reveald: false,
          location: { width: i, height: j },
        };
      }
    }
    return boardCells;
  }

  shuffleMines(boardCells) {
    let minesArray = [],
      randomArray = [];
    for (let i = 0; i < this.props.width; i++) {
      for (let j = 0; j < this.props.height; j++) {
        randomArray.push({ width: i, height: j });
      }
    }
    randomArray = this.randomMines(randomArray);
    for (let i = 0; i < this.props.mines; i++) {
      boardCells[randomArray[i].width][randomArray[i].height].mine = true;
      minesArray.push({
        width: randomArray[i].width,
        height: randomArray[i].height,
      });
    }
    return minesArray;
  }

  randomMines(minesArrayForShuffle) {
    for (let i = minesArrayForShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [minesArrayForShuffle[i], minesArrayForShuffle[j]] = [
        minesArrayForShuffle[j],
        minesArrayForShuffle[i],
      ];
    }
    return minesArrayForShuffle;
  }

  fillMinesInBoardAndAddValueToNeighbors(boardCells, minesArray) {
    minesArray.forEach((mine) => {
      this.runOnNeighbors(mine.width, mine.height, boardCells, true);
    });
  }

  async flagClicked(cellData) {
    
    if (this.props.remainingFlags === 0 && !cellData.flag) {
      alert("You dont have any more flags!");
    } else {
      const isCellFlagged = await this.updateBoardWithFlag(cellData);
      debugger;
      let flaggedCells = isCellFlagged
        ? this.props.remainingFlags - 1
        : this.props.remainingFlags + 1;

      await this.props.setRemainingFlags(flaggedCells);
    }
  }

  async updateBoardWithFlag(cellData) {
    const isFlagged = !this.props.boardCells[cellData.location.width][
      cellData.location.height
    ].flag;
    let updatedCellBoard = this.props.boardCells.map((arr) => arr.slice());
    updatedCellBoard[cellData.location.width][
      cellData.location.height
    ].flag = isFlagged;
    await this.props.setBoardCells(updatedCellBoard);
    return isFlagged;
  }
  updateBoardWithMine(cellData) {
    const isFlagged = !this.props.boardCells[cellData.location.width][
      cellData.location.height
    ].flag;
    let updatedCellBoard = this.props.boardCells.map((arr) => arr.slice());
    updatedCellBoard[cellData.location.width][
      cellData.location.height
    ].flag = isFlagged;
    this.setState({ boardCells: updatedCellBoard });
    return isFlagged;
  }

  componentDidUpdate() {
    if (this.props.newGame) {
      this.buildBoard();
    } else if (this.props.loadGame) {
      this.loadBoard();
    }
  }

  async revealCells(clickedCell) {
    var newBoardCells = this.props.boardCells.map((arr) => arr.slice());

    if (clickedCell == undefined) {
      for (var i = 0; i < newBoardCells.length; i++) {
        for (var j = 0; j < newBoardCells[i].length; j++) {
          newBoardCells[i][j].reveald = true;
        }
      }
      this.setState({ boardCells: newBoardCells });
      return;
    }
    if (clickedCell.value > 0) {
      clickedCell.reveald = true;

      await this.props.setRemainingNonBombCells(
        this.props.remainingNonBombCells - 1
      );

      if (this.props.remainingNonBombCells === 0) {
        this.handleWin();
      }
    } else {
      this.runOnNeighbors(
        clickedCell.location.width,
        clickedCell.location.height,
        newBoardCells,
        false
      );
    }
    this.setState({ boardCells: newBoardCells });
  }

  async runOnNeighbors(cellWidth, cellHeight, newBoardCells, isFillMinesFlow) {
    let neighborsToCheck = [];
    neighborsToCheck.push(newBoardCells[cellWidth][cellHeight]);

    while (neighborsToCheck.length != 0) {
      let currentCell = neighborsToCheck.pop();
      cellWidth = currentCell.location.width;
      cellHeight = currentCell.location.height;

      for (var i = cellWidth - 1; i <= cellWidth + 1; i++) {
        for (var j = cellHeight - 1; j <= cellHeight + 1; j++) {
          var neighbor = newBoardCells[i] && newBoardCells[i][j];
          if (isFillMinesFlow && neighbor) {
            neighbor.value++;
          } else if (
            neighbor &&
            !neighbor.reveald &&
            !neighbor.mine &&
            !neighbor.flag
          ) {
            neighbor.reveald = true;
            await this.props.setRemainingNonBombCells(
              this.props.remainingNonBombCells - 1
            );

            if (neighbor.value === 0) {
              neighborsToCheck.push(neighbor);
            }

            if (this.props.remainingNonBombCells === 0) {
              this.handleWin();
            }
          }
        }
      }
    }
  }

  mineClicked(cellData) {
    cellData.isGameOverCell = true;

    var cellFailure = document
      .querySelectorAll(".board tr")
      [parseInt(cellData.location.width)].querySelectorAll("td")[
      cellData.location.height
    ];

    setTimeout(
      async function () {
        let game = this.props.savedGames.find(
          (game) => game.gameId === this.props.gameId
        );
        if (game !== undefined) {
          game.status = "Lost";
          game.endTime = toMMddyyyyhhmmss(new Date());
          (game.totalSpentTime = ssdiffMMddyyyyhhmmss(
            game.endTime - game.startTime
          )),
            this.props.editSavedGame(game);
        } else {
          game = {
            SetUp: {
              difficulty: this.props.difficulty,
              difficultyId: this.props.difficultyId,
            },
            MineSweeper: {
              remainingFlags: this.props.remainingFlags,
              remainingNonBombCells: this.props.remainingNonBombCells,
              gameStatus: this.props.gameStatus,
              boardCells: this.props.boardCells,
            },
            startTime: this.props.startTime,
            endTime: toMMddyyyyhhmmss(new Date()),
            totalSpentTime: ssdiffMMddyyyyhhmmss(
              toMMddyyyyhhmmss(new Date()),
              this.props.startTime
            ),
            status: "Lost",
            gameId: this.props.gameId,
          };
          await this.props.addSavedGame(game);
          await this.props.setGameId();
        }

        alert("You clicked on a Mine! :(");
      }.bind(this),
      100
    );
    this.revealCells();
    this.props.setGameStatus("😫");

    cellFailure.style.backgroundColor = "Orange";
  }
  handleWin() {
    this.props.setRemainingFlags(this.props.mines);

    var newBoardCells = this.props.boardCells.map((arr) => arr.slice());

    for (var i = 0; i < newBoardCells.length; i++) {
      for (var j = 0; j < newBoardCells[i].length; j++) {
        if (newBoardCells[i][j].mine) {
          newBoardCells[i][j].flag = true;
        }
      }
    }
    setTimeout(
      async function () {
        let game = this.props.savedGames.find(
          (game) => game.gameId === this.props.gameId
        );
        if (game !== undefined) {
          game.status = "Won";
          game.endTime = toMMddyyyyhhmmss(new Date());
          (game.totalSpentTime = ssdiffMMddyyyyhhmmss(
            toMMddyyyyhhmmss(new Date()) - game.startTime
          )),
            await this.props.editSavedGame(game);
          await this.props.setGameStatus("😃");
          await this.props.setGameId();
        } else {
          game = {
            SetUp: {
              difficulty: this.props.difficulty,
              difficultyId: this.props.difficultyId,
            },
            MineSweeper: {
              remainingFlags: this.props.remainingFlags,
              remainingNonBombCells: this.props.remainingNonBombCells,
              gameStatus: this.props.gameStatus,
              boardCells: this.props.boardCells,
            },
            startTime: this.props.startTime,
            endTime: toMMddyyyyhhmmss(new Date()),
            totalSpentTime: ssdiffMMddyyyyhhmmss(
              toMMddyyyyhhmmss(new Date()),
              this.props.startTime
            ),
            status: "Won",
            gameId: this.props.gameId,
          };
          await this.props.setGameId();
          await this.props.setGameStatus("😃");
          await this.props.addSavedGame(game);
        }
        alert("You win!");
      }.bind(this),
      100
    );
  }

  render() {
    return (
      <div id="board-root">
        <table
          className="board"
          style={{
            overflowX: "auto",
            borderSpacing: "1px",
          }}
        >
          <tbody>
            {this.props.boardCells.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Cell
                    data={cell}
                    key={cellIndex}
                    boardMeasures={{
                      containerHeight: this.state.containerHeight,
                      containerWidth: this.state.containerWidth,
                      numOfHeightCells: this.props.boardHeight,
                      numOfWidthCells: this.props.boardWidth,
                    }}
                    flagClicked={this.flagClicked}
                    revealCells={this.revealCells}
                    mineClicked={this.mineClicked}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    height: state.Setup.height,
    width: state.Setup.width,
    mines: state.Setup.mines,
    remainingFlags: state.MineSweeper.remainingFlags,
    remainingNonBombCells: state.MineSweeper.remainingNonBombCells,
    gameStatus: state.MineSweeper.gameStatus,
    boardCells: state.MineSweeper.boardCells,
    savedGames: state.SavedGames,
    boardCells: state.MineSweeper.boardCells,
    gameId: state.MineSweeper.gameId,
    difficulty: state.Setup.difficulty,
    difficultyId: state.Setup.difficultyId,
    startTime: state.MineSweeper.startTime,
    totalSpentTime: state.MineSweeper.totalSpentTime,
    status: state.MineSweeper.status,
  };
};

export default connect(mapStateToProps, {
  setRemainingFlags,
  setBoardCells,
  setRemainingNonBombCells,
  setNewGame,
  setGameStatus,
  addSavedGame,
  editSavedGame,
  setStartTime,
  setGameId,
})(Board);
