import reducers from "./reducer";

test("SavedGame reducer", () => {
  let state;
  state = reducers(
    {
      SavedGames: [
        {
          SetUp: { difficulty: "Kinder", difficultyId: 0 },
          MineSweeper: {
            remainingFlags: 1,
            remainingNonBombCells: 15,
            gameStatus: "😃",
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
          },
          startTime: "01-25-2021 8:25:20",
          endTime: "01-25-2021 8:26:07",
          totalSpentTime: null,
          status: "Won",
          gameId: "lkhzyp",
        },
      ],
    },
  );
  expect(state).toEqual({
    SavedGames: [
      {
        SetUp: { difficulty: "Kinder", difficultyId: 0 },
        MineSweeper: {
          remainingFlags: 1,
          remainingNonBombCells: 15,
          gameStatus: "😃",
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
        },
        startTime: "01-25-2021 8:25:20",
        endTime: "01-25-2021 8:26:07",
        totalSpentTime: null,
        status: "Won",
        gameId: "lkhzyp",
      },
    ],
  });
});
