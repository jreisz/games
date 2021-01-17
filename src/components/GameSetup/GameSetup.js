// this component for GameSetup page
import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col } from "reactstrap";

class GameSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          boardHeight: 10,
          boardWidth: 10,
          boardMines: 10,
        };
      }
    
  render() {
    return (
      <div>
        <h1>GameSetup Page</h1>
        <Row>
          <Col xs="4">
            <span>
              {" "}
              Width:{" "}
              <input
                id="widthInput"
                defaultValue={this.state.boardHeight}
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              {" "}
              Height:{" "}
              <input
                id="heightInput"
                defaultValue={this.state.boardWidth}
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              {" "}
              Mines:{" "}
              <input
                id="minesInput"
                defaultValue={this.state.boardMines}
              />{" "}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
export default GameSetup;
