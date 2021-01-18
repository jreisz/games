import React, { Component } from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from "reactstrap";

class GameSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen:false,
      boardHeight: 10,
      boardWidth: 10,
      boardMines: 10,
    };
  }

  toggle() { this.setState( {dropdownOpen: !dropdownOpen});}
  
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
        <Row>
          <Col xs="12">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Difficulty</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Easy</DropdownItem>
                <DropdownItem>Medium</DropdownItem>
                <DropdownItem>Hard</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
export default GameSetup;
