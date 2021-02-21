import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard';
import { Provider } from "react-redux";
import { store } from '../../store';
import { create } from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("Game Board", () => {

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <GameBoard />
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });    
});