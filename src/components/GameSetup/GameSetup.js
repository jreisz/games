import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { setDifficulty,setWidth,setHeight,setMines } from '../../store/SetUp/actions'
import { setRemainingFlags } from '../../store/MineSweeper/actions'

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from "reactstrap";

class GameSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen:false,
      dropDownValue:'Easy',
      boardHeight: 10,
      boardWidth: 10,
      boardMines: 10,
    };
    this.changeValue = this.changeValue.bind(this); 
  }
  changeValue(e) {

    this.props.setDifficulty(e.currentTarget.textContent)
  }
  
  toggle() { this.setState( {dropdownOpen: !this.state.dropdownOpen});}
  
  render() {
    return (
      <div style={{paddingTop:50}}>
        <Row>
          <Col xs="4">
            <span>
              Width:{" "}
              <input
                id="widthInput"
                value={this.props.width}
                onChange={(e)=>this.props.setWidth(e.target.value)}
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              Height:{" "}
              <input
                id="heightInput"
                value={this.props.height}
                onChange={(e)=>{
                  this.props.setHeight(e.target.value)}}
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              Mines:{" "}
              <input
                id="minesInput"
                value={this.props.mines}
                onChange={(e)=> {this.props.setMines(e.target.value);this.props.setRemainingFlags(e.target.value); }}
              />
            </span>
          </Col>
        </Row>
        
        <Row>
          <br></br>
        </Row>
        <Row>
          <Col xs="12">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={() =>this.toggle()} >
              <DropdownToggle caret>Difficulty: {this.props.dropDownValue}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.changeValue}>Easy</DropdownItem>
                <DropdownItem onClick={this.changeValue}>Medium</DropdownItem>
                <DropdownItem onClick={this.changeValue}>Hard</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => 
  {
    return {
      dropDownValue : state.Setup.difficulty,
      height : state.Setup.height,
      width : state.Setup.width,
      mines : state.Setup.mines
    }
}
export default connect(
  mapStateToProps, { setDifficulty, setWidth, setHeight, setMines,setRemainingFlags }
)( GameSetup)