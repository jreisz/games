import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './DefaultNavBar.scss';
class DefaultNavBar extends Component {
  render() {
    return (
      <nav className="defaultNavBar">
        <ul>
          <li>
            <NavLink exact to="/setup">
              Game Setup
              {/* TODO: should be recived on componentdidmount with fetch, from server */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/board">Game Board
            {/* TODO: should be recived on componentdidmount with fetch, from server */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/finishedGames">Finished Games List
            {/* TODO: should be recived on componentdidmount with fetch, from server */}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default DefaultNavBar;
