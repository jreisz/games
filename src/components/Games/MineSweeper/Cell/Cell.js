import React from "react";
import FontAwesome from "react-fontawesome";

const backgroundRevealedContent = `rgba(100, 100, 100, 0)`;
const backgroundRevealedContentGameOverBomb = `rgba(255, 0, 0, 1)`;
const backgroundHiddenContent = `rgba(100, 100, 100, 0.4)`;
const emptyCellSymbol = " ";
const mineCellSymbol = "💣";
const defualtCellSize = "30px";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealdCell: false,
      isGameOverCell: false,
      isShiftPressed: this.props.isShiftPressed,
    };
    this.clickOnCell = this.clickOnCell.bind(this);
    this.numberColor = this.numberColor.bind(this);
  }
  componentWillMount() {
    this.setState({ cellWidth: defualtCellSize, cellHeight: defualtCellSize });
  }
  componentDidMount() {
    this.setState({ isShiftPressed: this.props.isShiftPressed });
  }
  showCellSymbol() {
    if (this.props.data.flag) {
      return "⚑";
    }
    if (this.props.data.reveald) {
      if (this.props.data.mine) {
        return mineCellSymbol;
      }
      if (this.props.data.value >= 1) {
        return this.props.data.value.toString();
      }
    }
    return emptyCellSymbol;
  }
  numberColor() {
    let number, color;
    if(this.props.data.flag){
      return 'Black'
    }
    else if (this.props.data.value >= 1) {
      number = parseInt(this.props.data.value);
    }
    switch (number) {
      case 1:
        color = "#0000ff";
        break;
      case 2:
        color = "#00ff00";
        break;
      case 3:
        color = "#ff0000";
        break;
      case 4:
        color = "#0062cc";
        break;
      case 5:
        color = "#117a8b";
        break;
      default:
        color = "#343a40";
        break;
    }
    return color;
  }
  clickOnCell() {
    if (this.props.isShiftPressed) {
      this.props.flagClicked(this.props.data);
    } else if (this.props.data.mine) {
      this.props.mineClicked(this.props.data);
    } else if (!this.props.data.flag) {
      this.props.revealCells(this.props.data);
    }
  }
  render() {
    return (
      <td
        className="td-cell"
        key={this.props.data.reveald}
        style={{
          background: `${
            this.props.data.reveald
              ? this.props.data.isGameOverCell
                ? backgroundRevealedContentGameOverBomb
                : backgroundRevealedContent
              : backgroundHiddenContent
          }`,
          verticalAlign: "bottom",
          width: `${this.state.cellWidth}`,
          height: `${this.state.cellHeight}`,
        }}
        onClick={this.clickOnCell}
      >
        <span style={{ color: this.numberColor(), fontWeight:'bolder' ,fontSize:'1.25rem'}}>
          {this.showCellSymbol()}
        </span>
      </td>
    );
  }
}

export { Cell };
