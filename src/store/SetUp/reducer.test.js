import reducers from "./reducer";

test("SetUp reducer", () => {
  let state;
  state = reducers(
    {
      Setup: {
        width: 4,
        height: 4,
        mines: 1,
        newGame: false,
        loadGame: false,
        difficulty: "Kinder",
        difficultyId: 0,
      },
    },
    { type: "SET_GAME_STATUS", payload: { gameStatus: "😃" } }
  );
  expect(state).toEqual({
    Setup: {
      width: 4,
      height: 4,
      mines: 1,
      newGame: false,
      loadGame: false,
      difficulty: "Kinder",
      difficultyId: 0,
    },
  });
});
