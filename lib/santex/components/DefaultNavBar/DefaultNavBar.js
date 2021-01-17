import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './DefaultNavBar.css';
class DefaultNavBar extends Component {
  render() {
    return (
      <nav className="defaultNavBar">
        <ul>
          <li>
            <NavLink exact to="/setup">
              Game Setup
            </NavLink>
          </li>
          <li>
            <NavLink to="/board">Game Board</NavLink>
          </li>
          <li>
            <NavLink to="/finishedGames">Finished Games List</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default DefaultNavBar;
