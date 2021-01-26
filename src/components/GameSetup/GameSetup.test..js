import React from 'react';
import ReactDOM from 'react-dom';
import GameSetup from './GameSetup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameSetup />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('checks default difficulty', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<GameSetup />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('changes difficulty to Hard', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<GameSetup />, div);
//   ReactDOM.unmountComponentAtNode(div);
// }); 
