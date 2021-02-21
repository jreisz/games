// import React from 'react';
// import ReactDOM from 'react-dom';
// import MineSweeper from './Minesweeper';
// import Cell from '../Cell';
// import { spy } from 'sinon';

// describe("MineSweeper", () => {
//   let ms;
//   let el;
//   let winGameSpy, loseGameSpy, revealBombsSpy;

//   const text = (node) => {
//     let innerHTML = node.innerHTML;
//     return innerHTML.replace(/<[^>]*>/g, "");
//   }

//   beforeEach(() => {
//     document.body.innerHTML = '<div id="main" /><div id="numBombs" />';
//     el = document.getElementById("main");
//     ms = new MineSweeper({ rows: 10, cols: 10, bombs: 10 });
//     winGameSpy = spy(MineSweeper.prototype, "winGame");
//     loseGameSpy = spy(MineSweeper.prototype, "loseGame");
//     revealBombsSpy = spy(MineSweeper.prototype, "revealBombs");
//   });

//   afterEach(() => {
//     winGameSpy.restore();
//     loseGameSpy.restore();
//     revealBombsSpy.restore();
//   });

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<FinishedGames />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });


//   it("is to be created with 100 cells and 10 bombs", () => {
// 		expect(ms.rows).toBe(10);
// 		expect(ms.cols).toBe(10);
// 		expect(ms.total).toBe(100);
// 		expect(ms.bombs).toBe(10);
// 	});

// 	it("creates 100 cells", () => {
// 		expect(ms.cellMatrix.length).toBe(10);
// 		expect(ms.cellMatrix[0].length).toBe(10);
// 		expect(ms.cellMatrix[0][0]).toBeInstanceOf(Cell);
// 	});

// 	it("assigns the correct attribute to cell", () => {
// 		let firstCell = ms.cellMatrix[0][0];
// 		let lastCell = ms.cellMatrix[9][9];
// 		expect(firstCell.index).toBe(0);
// 		expect(firstCell.rowIndex).toBe(0);
// 		expect(firstCell.colIndex).toBe(0);
// 		expect(lastCell.index).toBe(99);
// 		expect(lastCell.rowIndex).toBe(9);
// 		expect(lastCell.colIndex).toBe(9);
// 	});

// 	it("creates 10 bombs", () => {
// 		expect(ms.bombArray.length).toBe(10);
// 	});

// 	it("creates integer bomb indexes", () => {
// 		expect(ms.bombArray[0]).toBe( parseInt(ms.bombArray[0] ));
// 	});

// 	it("generates bomb indexes randomly", () => {
// 		const ms2 = new MineSweeper({ rows: 10, cols: 10, bombs: 10});
// 		expect(ms2.bombArray).not.toEqual(ms.bombArray); //might fail *randomly
// 	});

// 	it("generates unique numbers", () => {
// 		for(let i = 0; i < 10; i++){
// 			ms = new MineSweeper({ rows: 10, cols: 10, bombs: 10});
// 			let containsDupe = ms.bombArray.some((item, i) => {
// 				return ms.bombArray.indexOf(item) !== i;
// 			});
// 			expect(containsDupe).toBe(false);
// 		}
// 	});

// 	it('passes isBomb to 10 cells', () => {
// 		let numBombsFound = 0;
// 		for(let row of ms.cellMatrix){
// 			for(let cell of row){
// 				if(cell.isBomb){
// 					numBombsFound++;
// 				}
// 			}
// 		}
// 		expect(numBombsFound).toBe(10);
// 	});

// 	it("displays bombs on DOM", () => {
// 		let cells = document.getElementsByClassName("cell");
// 		expect(cells.length).toBe(100);
// 	});

// 	it("add neighbors to cells", () => {
// 		let topLeftCell = ms.cellMatrix[0][0];
// 		let middleCell = ms.cellMatrix[4][4];
// 		expect(topLeftCell.neighbors.length).toBe(3);
// 		expect(middleCell.neighbors.length).toBe(8);
// 	});

// 	it("adds manual bomb array for testing", () => {
// 		let bombArray = [1];
// 		let ms2 = new MineSweeper({ bombArray: bombArray });
// 		expect(ms2.bombArray.length).toBe(1);
// 	});

// 	it("cell keeps track of nearby bombs", () => {
// 		let bombArray = [1];
// 		let ms2 = new MineSweeper({ bombArray: bombArray });
// 		let cell = ms2.cellMatrix[0][0];
// 		expect(cell.getNearbyBombCount()).toBe(1);
// 	});

// 	it("Minesweeper.stringify bombs for testing", () => {
// 		let ms2 = new MineSweeper({
// 			rows: 3,
// 			cols: 3,
// 			bombs: 1,
// 			bombArray: [1]
// 		});
// 		let string = ms2.stringify();
// 		let expectedString = "[1X1][111][000]";
// 		expect(string).toBe(expectedString);
// 	});

// 	it("Minesweeper.stringify works for 3 bombs", () => {
// 	  let ms = new MineSweeper({
// 	    rows: 3,
// 	    cols: 3,
// 	    bombs: 2,
// 	    bombArray: [1,7]
// 	  });
// 	  let string = ms.stringify();
// 	  let expectedString = "[1X1][222][1X1]";
// 	  expect(string).toBe(expectedString);
// 	});


// 	it("updates bomb count after flag", () => {
// 		let cell = ms.cellMatrix[0][0];
// 		let e2 = new MouseEvent("contextmenu");
// 		cell.el.dispatchEvent(e2);
// 		expect(ms.bombsLeft).toBe(9);
// 		cell.el.dispatchEvent(e2);
// 		expect(ms.bombsLeft).toBe(10);
// 	});

// 	it("updates flag array after flag", () => {
// 		expect(ms.flagArray).toEqual([]);
// 		let cell = ms.cellMatrix[0][0];
// 		let e2 = new MouseEvent("contextmenu");
// 		cell.el.dispatchEvent(e2);
// 		expect(ms.flagArray).toEqual([0]);
// 		ms.flagArray = [3, 2, 1, 0, 4, 5];
// 		console.log("ms.flagArray", ms.flagArray);
// 		cell.el.dispatchEvent(e2);
// 		expect(ms.flagArray).toEqual([3, 2, 1, 4, 5]);
// 	});

// 	it("Displays the numbers of bombs", () => {
// 		expect(ms.bombsLeftEl.innerHTML).toBe("10 bombs left");
// 	});

// 	it("wins game after correct bombs are depleted", () => {
// 		let bombArray = [0];
// 		let ms2 = new MineSweeper({ bombArray: bombArray, bombs: 1 });
// 		let firstCell = ms2.cellMatrix[0][0];
// 		let e2 = new MouseEvent("contextmenu");
// 		firstCell.el.dispatchEvent(e2);
// 		expect(ms2.bombsLeft).toBe(0);
// 		expect(winGameSpy.calledOnce).toBe(true);
// 		ms2.cellMatrix[0][1].el.dispatchEvent(e2);
// 		expect(winGameSpy.calledOnce).toBe(true);
// 		expect(loseGameSpy.called).toBe(false);
// 		//expect(ms2.bombsLeftEl.innerHTML).toBe("You win!");
// 	});

// 	it("loses game after incorrect bombs are chosen", () => {
// 		let bombArray = [1];
// 		let ms2 = new MineSweeper({ bombArray: bombArray, bombs: 1 });
// 		let firstCell = ms2.cellMatrix[0][0];
// 		let e2 = new MouseEvent("contextmenu");
// 		firstCell.el.dispatchEvent(e2);
// 		expect(ms2.bombsLeft).toBe(0);
// 		expect(winGameSpy.called).toBe(false);
// 		expect(loseGameSpy.calledOnce).toBe(true);
// 		//expect(ms2.bombsLeftEl.innerHTML).toBe("You lose!");
// 	});

// 	it("displays if you have won", () => {
// 		ms.winGame();
// 		expect(ms.bombsLeftEl.innerHTML).toBe("You win!");
// 	});

// 	it("displays if you have lost", () => {
// 		ms.loseGame();
// 		expect(ms.bombsLeftEl.innerHTML).toBe("You lose!");
// 	});

// 	it("reveals bombs", () => {
// 		ms.revealBombs();
// 		let bombCell;
// 		let isEmptyCell = false;
// 		for(let row of ms.cellMatrix){
// 			for(let cell of row){
// 				if(cell.el.innerHTML === "&nbsp;"){
// 					isEmptyCell = true;
// 				}
// 				if(cell.isBomb){
// 					bombCell = cell;
// 				}
// 			}
// 		}
// 		expect(bombCell.el.innerHTML).toBe('X');
// 		expect(isEmptyCell).toBe(false);
// 	});

// 	it('loses game after a bomb is clicked', () => {
// 		let bombArray = [0];
// 		let ms = new MineSweeper({ bombArray: bombArray, bombs: 1 });
// 		let firstCell = ms.cellMatrix[0][0];
// 		let e = new MouseEvent("click");
// 		firstCell.el.dispatchEvent(e);
// 		expect(loseGameSpy.calledOnce).toBe(true);
//   });
  

//   // it('show records', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   // it('doesn\'t show records', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   // it('shows the table after page refresh', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   // it('checks if startTime column format equal to MM-DD-YYYY hh:mm (12hr format)', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   // it('checks if status column equal to and Won/Lost', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   // it('order the rows with ascending order', () => {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(<FinishedGames />, div);
//   //   ReactDOM.unmountComponentAtNode(div);
//   // });

//   //////////////////////////////////////////////////////////////////////////////////////


//   //////////////////////////////////////////////////////////////////////////////////////
  
// });