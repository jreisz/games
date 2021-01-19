import React from "react";
import { Jumbotron, Button } from "reactstrap";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startButton : '😃'
    }
    this.setNewGame = this.setNewGame.bind(this);
  }
  
  setNewGame() {
    this.setState({startButton: startButton==='😃'?'😫':'😃'  })
  }
  setNewGame() {
    let gameSettings = {
      boardHeight: 10,
      boardWidth: 10,
      boardMines: 10,
    };
    this.props.newGameHandler(gameSettings);
    this.setState({ gameSettings });
    this.props.initFlags();
  }
  
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to Minesweeper game !</h1>
          <div className="instructions">
            You are presented with a board of squares. Some squares contain
            mines (bombs), others don't. <br />
            If you click on a square containing a bomb, you lose. <br /> If you
            manage to click all the squares (without clicking on any bombs) you
            win. <br /> Mark with flags the bombs (shift+click)
          </div>
          <div className="lead">Cheers, JIIIR</div>
          <hr />
          
          <div className="newGameBtn" style={{ margin: "15px" }}>
            <Button onClick={this.setNewGame} color="primary">
            {this.state.startButton}
            </Button>
          </div>

          <div>
            <div style={{ marginTop: "5px" }}>
              {" "}
              Flags left: {this.props.boardFlags}{" "}
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}


