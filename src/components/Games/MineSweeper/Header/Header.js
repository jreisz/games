import React from "react";
import { Jumbotron, Button } from "reactstrap";
import {connect} from 'react-redux';
import { setNewGame } from '../../../../store/SetUp/actions'


 class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startButton: "😃",
    };//😫
    this.setNewGame = this.setNewGame.bind(this);
  }

  setNewGame() {
    this.setState({ startButton:  "😃"  });
    this.props.setNewGame(true);
  }

  render() {
    return (
      <>
        <Jumbotron style={{padding:40}}>
          <h1 className="display-4">Welcome to Minesweeper game !</h1>
          <div className="instructions">
            You are presented with a board of squares. Some squares contain
            mines (bombs), others don't. <br />
            If you click on a square containing a bomb, you lose. <br /> If you
            manage to click all the squares (without clicking on any bombs) you
            win. <br /> Mark with flags the bombs (shift+click)
          </div>
        </Jumbotron>
        
        <div className="newGameBtn" style={{ margin: "15px" }}>
          <Button onClick={this.setNewGame} color="primary">
            {this.state.startButton}
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
      remainingFlags: state.MineSweeper.remainingFlags
    }
}
export default connect(
  mapStateToProps, { setNewGame }
)( Header)