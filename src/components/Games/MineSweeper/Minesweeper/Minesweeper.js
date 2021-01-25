import React from "react";
import Board from "../Board/Board.js";
import Header from "../Header/Header.js";
import { connect } from "react-redux";
import "./Minesweeper.scss";

// function dragElement(element, direction) {
//   var md;
//   const first = document.getElementById("first");
//   const second = document.getElementById("second");

//   element.onmousedown = onMouseDown;

//   function onMouseDown(e) {
//     md = {
//       e,
//       offsetLeft: element.offsetLeft,
//       offsetTop: element.offsetTop,
//       firstHeight: first.offsetHeight,
//       secondHeight: second.offsetHeight,
//     };

//     document.onmousemove = onMouseMove;
//     document.onmouseup = () => {
//       document.onmousemove = document.onmouseup = null;
//     };
//   }

//   function onMouseMove(e) {
//     var delta = { x: e.clientX - md.e.clientX, y: e.clientY - md.e.clientY };

//     if (direction === "V") {
//       delta.y = Math.min(Math.max(delta.y, -md.firstHeight), md.secondHeight);

//       element.style.left = md.offsetLeft + delta.x + "px";
//       first.style.height = md.firstHeight + delta.y + "px";
//       second.style.height = md.secondHeight - delta.y + "px";
//     }
//   }
// }

class MineSweeper extends React.Component {
  // componentDidMount() {
  //   dragElement(document.getElementById("separator"), "V");
  // }
  render() {
    return (
      <div className="MinesWeeper ">
        <Header />
        <Board newGame={this.props.newGame} loadGame={this.props.loadGame} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newGame: state.Setup.newGame,
  };
};

export default connect(mapStateToProps)(MineSweeper);
