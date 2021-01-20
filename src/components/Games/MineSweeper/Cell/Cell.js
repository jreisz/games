import React from "react";
import FontAwesome from "react-fontawesome";

const backgroundRevealedContent = `rgba(100, 100, 100, 0)`;
const backgroundHiddenContent = `rgba(100, 100, 100, 0.4)`;
const emptyCellSymbol = " ";
const mineCellSymbol = " * ";
const defualtCellSize = "30px";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealdCell: false,
      isShiftPressed: this.props.isShiftPressed,
    };
    this.clickOnCell = this.clickOnCell.bind(this);
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

  clickOnCell() {
    if (this.props.isShiftPressed) {
      this.props.flagClicked(this.props.data);
    } else if (this.props.data.mine) {
      this.props.mineClicked();
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
              ? backgroundRevealedContent
              : backgroundHiddenContent
          }`,
          verticalAlign: "bottom",
          width: `${this.state.cellWidth}`,
          height: `${this.state.cellHeight}`,
        }}
        onClick={this.clickOnCell}
      >
        <span>{this.showCellSymbol()}</span>
      </td>
    );
  }
}

export { Cell };
