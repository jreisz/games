import React from 'react';
import ReactDOM from 'react-dom';
import GameSetup from './GameSetup';
import { Provider } from "react-redux";
import { store } from '../../store';
import { create } from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("Game Setup", () => {
    let component;

    beforeAll(() => {
        component = mount(
            <Provider store={store}>
                <GameSetup />
            </Provider>
        );
    });
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <GameSetup />
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with given state from Redux store', () => {
        const rendererComponent = create(<Provider store={store}>
            <GameSetup />
        </Provider>);
        expect(rendererComponent.toJSON()).toMatchSnapshot()
    });
    it('checks default difficulty', () => {
        const difficulty = component.find('button').first().text();
        expect(difficulty).toBe('Difficulty: ' + 'Kinder');
    });
    it('changes difficulty to Hard', () => {

        let difficulty = component.find('button').first().text();
        expect(difficulty).toBe('Difficulty: ' + 'Kinder');

        const optionHard = component.find('DropdownItem').at(3);
        optionHard.simulate('click', { });
        
        component.update()

        difficulty = component.find('button').first().text();
        expect(difficulty).toBe('Difficulty: ' + 'Hard');
        
    });    
});