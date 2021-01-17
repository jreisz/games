// this component for GameBoard page
import React, { Component } from 'react';
import { MinesWeeper } from '../Games/MineSweeper/MineSweeper/MineSweeper'

class GameBoard extends Component{
    render(){
        return(
            <div>
                <h1>GameBoard Page</h1>
                <MinesWeeper />
            </div>
        );
    }
}
export default GameBoard;