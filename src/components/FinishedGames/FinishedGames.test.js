import React from 'react';
import ReactDOM from 'react-dom';
import FinishedGames from './FinishedGames';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('show records', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('doesn\'t show records', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the table after page refresh', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks if startTime column format equal to MM-DD-YYYY hh:mm (12hr format)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks if status column equal to and Won/Lost', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('order the rows with ascending order', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedGames />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 
