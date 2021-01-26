import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Cell from '../Cell';
import { spy } from 'sinon';

describe("Cell", () => {
  let cell, el;
  let checkBombSpy;

  beforeEach(() => {
    document.body.innerHTML = '<div id="cell">';
    el = document.getElementById("cell");
    checkBombSpy = spy(Cell.prototype, 'checkBomb');
    cell = new Cell();
  });

  afterEach(() => {
    checkBombSpy.restore();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("responds to a click", () => {
    let e = new MouseEvent("click");
    cell.el.dispatchEvent(e);
    expect(checkBombSpy.calledOnce).toBe(true);
  });

  it("displays number of nearby bombs", () => {
    let e = new MouseEvent("click");
    cell.neighbors = [
      new Cell({ isBomb: true }),
      new Cell({ isBomb: true }),
      new Cell({ isBomb: true }),
    ]
    cell.el.dispatchEvent(e);
    expect(cell.numBombs).toBe(3);
    expect(cell.el.innerHTML).toBe("3");
  });

  it("ends the game with a passed function", () => {
    let endGame = jest.fn();
    let explodingCell = new Cell({ isBomb: true, onExplode: endGame });
    explodingCell.explode();
    expect(endGame).toBeCalled();
  });

  it("adds a flag after a right click", () => {
    expect(cell.flag).toBe(false);
    let e2 = new MouseEvent("contextmenu");
    cell.el.dispatchEvent(e2);
    expect(cell.flag).toBe(true);
    expect(cell.el.classList.contains('flag')).toBe(true);
    expect(checkBombSpy.calledOnce).toBe(false);
    cell.el.dispatchEvent(e2);
    expect(cell.el.classList.contains('flag')).toBe(false);
  });

  //////////////////////////////////////////////////////////////////////////////////////
  
  // it('creates the board', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('clicks a non bomb tile', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('clicks a bomb tile', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('adds a flag', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('removes a flag', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('wins', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Board />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  //////////////////////////////////////////////////////////////////////////////////////

});