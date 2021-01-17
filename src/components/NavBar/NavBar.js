import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/setup">Game Setup</NavLink></li>
                    <li><NavLink to="/board">Game Board</NavLink></li>
                    <li><NavLink to="/finishedGames">Finished Games List</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;