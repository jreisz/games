import reducers from "./reducer";

test("MineSweeper reducer", () => {
  let state;
  state = reducers(
    {
      MineSweeper: {
        remainingFlags: 1,
        remainingNonBombCells: 0,
        boardCells: [
          [
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 0, height: 0 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 0, height: 1 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 0, height: 2 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 0, height: 3 },
            },
          ],
          [
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 1, height: 0 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 1, height: 1 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 1, height: 2 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 1, height: 3 },
            },
          ],
          [
            {
              mine: false,
              flag: false,
              value: 1,
              reveald: true,
              location: { width: 2, height: 0 },
            },
            {
              mine: false,
              flag: false,
              value: 1,
              reveald: true,
              location: { width: 2, height: 1 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 2, height: 2 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 2, height: 3 },
            },
          ],
          [
            {
              mine: true,
              flag: true,
              value: 1,
              reveald: false,
              location: { width: 3, height: 0 },
            },
            {
              mine: false,
              flag: false,
              value: 1,
              reveald: true,
              location: { width: 3, height: 1 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 3, height: 2 },
            },
            {
              mine: false,
              flag: false,
              value: 0,
              reveald: true,
              location: { width: 3, height: 3 },
            },
          ],
        ],
        gameStatus: "😃",
        gameId: "gszm7u",
        startTime: "01-25-2021 8:25:20",
      },
    },
    { type: "SET_GAME_STATUS", payload: { gameStatus: "😃" } }
  );
  expect(state).toEqual({
    MineSweeper: {
      remainingFlags: 1,
      remainingNonBombCells: 0,
      boardCells: [
        [
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 0, height: 0 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 0, height: 1 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 0, height: 2 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 0, height: 3 },
          },
        ],
        [
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 1, height: 0 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 1, height: 1 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 1, height: 2 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 1, height: 3 },
          },
        ],
        [
          {
            mine: false,
            flag: false,
            value: 1,
            reveald: true,
            location: { width: 2, height: 0 },
          },
          {
            mine: false,
            flag: false,
            value: 1,
            reveald: true,
            location: { width: 2, height: 1 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 2, height: 2 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 2, height: 3 },
          },
        ],
        [
          {
            mine: true,
            flag: true,
            value: 1,
            reveald: false,
            location: { width: 3, height: 0 },
          },
          {
            mine: false,
            flag: false,
            value: 1,
            reveald: true,
            location: { width: 3, height: 1 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 3, height: 2 },
          },
          {
            mine: false,
            flag: false,
            value: 0,
            reveald: true,
            location: { width: 3, height: 3 },
          },
        ],
      ],
      gameStatus: "😃",
      gameId: "gszm7u",
      startTime: "01-25-2021 8:25:20",
    }
  });
});
