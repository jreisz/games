import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { setDifficulty,setWidth,setHeight,setMines } from '../../store/SetUp/actions'
import { setRemainingFlags } from '../../store/MineSweeper/actions'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from "reactstrap";
import "./GameSetup.scss";

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
                readOnly='readOnly'
                className='__gameSetup_input-readonly'
                value={this.props.width}
                
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              Height:{" "}
              <input
                id="heightInput"
                value={this.props.height}
                className='__gameSetup_input-readonly'
                readOnly='readOnly'
                
              />{" "}
            </span>
          </Col>
          <Col xs="4">
            <span>
              Mines:{" "}
              <input
                id="minesInput"
                value={this.props.mines}
                className='__gameSetup_input-readonly'
                readOnly='readOnly'
                
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