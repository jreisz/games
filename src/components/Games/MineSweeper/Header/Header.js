import React from "react";
import { Jumbotron, Button } from "reactstrap";
import {connect} from 'react-redux';
import { setNewGame } from '../../../../store/SetUp/actions'
import { setGameStatus } from '../../../../store/MineSweeper/actions'

 class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setNewGame = this.setNewGame.bind(this);
  }

  setNewGame() {
    console.log('setNewGame')
    this.props.setGameStatus("😃");
    this.props.setNewGame(true);
  }

  render() {
    return (
      <>
        <Jumbotron style={{padding:20}}>
          <h1 className="display-4">Welcome to Minesweeper game !</h1>
          <div className="instructions">
            You are presented with a board of squares. Some squares contain
            mines (bombs), others don't. <br />
            During the game, you'll see numbers that represent the quantity of neighbours squares with bombs. <br /><br />
            If you click on a square
            e containing a bomb, you lose. <br /> If you
            manage to click all the squares (without clicking on any bombs) you
            win. <br /> Mark with flags the bombs (shift+click)
          </div>
        </Jumbotron>
        
        <div className="newGameBtn" style={{ margin: "0px" }}>
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
const mapStateToProps = state => 
  {
    return {
      remainingFlags: state.MineSweeper.remainingFlags,
      gameStatus: state.MineSweeper.gameStatus

    }
}
export default connect(
  mapStateToProps, { setNewGame, setGameStatus }
)( Header)