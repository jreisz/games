import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import FinishedGames from './FinishedGames';
import { Provider } from "react-redux";
import { addSavedGame, editSavedGame, clearSavedGames } from "../../store/SavedGames/actions";
import { store } from '../../store';
import { DIFFICULTY } from "../../constants";
import { create } from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("Finished Games", () => {

    let component;

    beforeAll(() => {

        store.dispatch(
            addSavedGame(
                {
                    SetUp: {
                        difficulty: DIFFICULTY.KINDER,
                        difficultyId: 0,
                    },
                    MineSweeper: {
                        remainingFlags: 1,
                        remainingNonBombCells: 14,
                        gameStatus: '😫',
                        boardCells: [
                            [{ mine: true, flag: false, value: 1, reveald: true, location: { width: 0, height: 0 }, isGameOverCell: true },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 0, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 3 } }],
                            [{ mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 0 } },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 3 } }],
                        ]
                    },
                    startTime: '01-25-2021 14:28:01',
                    endTime: '01-25-2021 14:28:09',
                    totalSpentTime: 8,
                    status: "Lost",
                    gameId: 'c4bah',
                })
        );
        store.dispatch(
            addSavedGame(
                {
                    SetUp: {
                        difficulty: DIFFICULTY.KINDER,
                        difficultyId: 0,
                    },
                    MineSweeper: {
                        remainingFlags: 1,
                        remainingNonBombCells: 14,
                        gameStatus: '😃',
                        boardCells: [
                            [{ mine: true, flag: false, value: 1, reveald: true, location: { width: 0, height: 0 }, isGameOverCell: true },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 0, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 3 } }],
                            [{ mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 0 } },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 3 } }],
                        ]
                    },
                    startTime: '01-25-2021 14:28:04',
                    endTime: '01-25-2021 14:28:09',
                    totalSpentTime: 8,
                    status: "Won",
                    gameId: 'sfdsf',
                })
        );

        component = mount(
            <Provider store={store}>
                <FinishedGames />
            </Provider>
        );
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <FinishedGames />
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with given state from Redux store', () => {
        const rendererComponent = create(<Provider store={store}>
            <FinishedGames />
        </Provider>);
        expect(rendererComponent.toJSON()).toMatchSnapshot()
    });
    it('should show list of games', () => {
        expect(component.find('tbody tr').length).toBe(2);
    });
    it('doesn\'t show records', () => {

        expect(component.find('tbody tr').length).toBe(2);

        store.dispatch(
            clearSavedGames()
        );
        component.update();

        expect(component.find('tbody tr').length).toBe(0);
    });
    it('shows the table after page refresh', () => {

        store.dispatch(
            addSavedGame(
                {
                    SetUp: {
                        difficulty: DIFFICULTY.KINDER,
                        difficultyId: 0,
                    },
                    MineSweeper: {
                        remainingFlags: 1,
                        remainingNonBombCells: 14,
                        gameStatus: '😫',
                        boardCells: [
                            [{ mine: true, flag: false, value: 1, reveald: true, location: { width: 0, height: 0 }, isGameOverCell: true },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 0, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 3 } }],
                            [{ mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 0 } },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 3 } }],
                        ]
                    },
                    startTime: '01-25-2021 14:28:01',
                    endTime: '01-25-2021 14:28:09',
                    totalSpentTime: 8,
                    status: "Lost",
                    gameId: 'c4bah',
                })
        );
        store.dispatch(
            addSavedGame(
                {
                    SetUp: {
                        difficulty: DIFFICULTY.KINDER,
                        difficultyId: 0,
                    },
                    MineSweeper: {
                        remainingFlags: 1,
                        remainingNonBombCells: 14,
                        gameStatus: '😃',
                        boardCells: [
                            [{ mine: true, flag: false, value: 1, reveald: true, location: { width: 0, height: 0 }, isGameOverCell: true },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 0, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 0, height: 3 } }],
                            [{ mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 0 } },
                            { mine: false, flag: false, value: 1, reveald: true, location: { width: 1, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 1, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 2, height: 3 } }],
                            [{ mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 0 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 1 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 2 } },
                            { mine: false, flag: false, value: 0, reveald: true, location: { width: 3, height: 3 } }],
                        ]
                    },
                    startTime: '01-25-2021 14:28:04',
                    endTime: '01-25-2021 14:28:09',
                    totalSpentTime: 8,
                    status: "Won",
                    gameId: 'sfdsf',
                })
        );
        component.update();
        expect(component.find('tbody tr').length).toBe(2);
        window.location.reload();
        component.update()
        expect(component.find('tbody tr').length).toBe(2);
    });
    it('checks if startTime column format equal to MM-DD-YYYY hh:mm (12hr format)', () => {
        const startTime = component.find('tbody tr').first().find('th').text();

        try {
            const ch01 = parseInt(startTime.substring(0, 2))
            const ch2 = startTime.substring(2, 3)
            const ch34 = parseInt(startTime.substring(3, 5))
            const ch5 = startTime.substring(5, 6)
            const ch6789 = parseInt(startTime.substring(6, 10))
            const ch10 = startTime.substring(10, 11)
            const ch1112 = parseInt(startTime.substring(11, 13))
            const ch13 = startTime.substring(13, 14)
            const ch1415 = parseInt(startTime.substring(14, 16))
            const ch16 = startTime.substring(16, 17)
            const ch1718 = startTime.substring(17, 19)

            expect(ch01 != 0).toBeTruthy();
            expect(ch01).toBeLessThan(13);
            expect(ch2).toBe('-');
            expect(ch34 != 0).toBeTruthy();
            expect(ch34).toBeLessThan(32);
            expect(ch5).toBe('-');
            expect(ch6789).toBeLessThan(9999);
            expect(ch10).toBe(' ');
            expect(ch1112 > -1).toBeTruthy();
            expect(ch1112).toBeLessThan(12);
            expect(ch13).toBe(':');
            expect(ch1415 > -1).toBeTruthy();
            expect(ch1415).toBeLessThan(60);
            expect(ch16).toBe(' ');
            expect(ch1718).toMatch(/am|pm/);
        } catch (err) {
            throw new Error(err)
        }

    });
    it('checks if status column equal to and Won/Lost', () => {
        const status = component.find('tbody tr').first().find('td').at(3).text();
        expect(status).toMatch(/Won|Lost/);
    });
    it('should check the order of the rows with ascending order on column Difficulty', () => {

        let isOrdered = true;

        const trs = component.find('tbody tr');

        for (let i = 1; i < trs.length; i++) {            
            if (trs.at(i - 1).find('td').at(1).text() > trs.at(i).find('td').at(1).text()) {
                isOrdered = false;
                break;
            }
        }
        expect(isOrdered).toBeTruthy();
    });
});