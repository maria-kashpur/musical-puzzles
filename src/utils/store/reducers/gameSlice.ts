import ApiHelper, { Pazzle } from "@/assets/db/data";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  title: string;
  wins: number[];
}

interface GameState {
  status: "start" | "create" | "play" | "finish";
  levels: Pazzle["id"][];
  hideLevels: Pazzle["id"][];
  currentLevel: number;
  players: { [key: string]: number[] };
}

const initialState: GameState = {
  status: "start",
  levels: [],
  hideLevels: [],
  currentLevel: 0,
  players: {},
};

const gameSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<GameState["status"]>) {
      state.status = action.payload;
    },

    newGame(state) {
      state.status = "create";
      state.currentLevel = 0;
      state.levels = ApiHelper.getShakeTasksID();
      state.players = {};
    },

    addPlayer(state, action: PayloadAction<string>) {
      const name = action.payload;

      state.players[name] = [];
    },

    setShowingLevels(
      state,
      action: PayloadAction<Pazzle["id"]>
    ) {
      const id = action.payload;
      const actionType = state.hideLevels.includes(id) ? "show" : "hide"

      switch (actionType) {
        case "show":
          state.hideLevels = state.hideLevels.filter((el) => el !== id);
          break;
        case "hide":
          state.hideLevels = [...state.hideLevels, id];
          break;
        default:
          break;
      }
    },
    resetHideLevels (state) {
      state.hideLevels = []
    },

    deletePlayer(state, action: PayloadAction<PlayerState["title"]>) {
      const name = action.payload;

      const players = {...state.players};

      if (name in players) {
        delete players[name];
      }

      state.players = players;
    },

    startGame(state) {

      state.status = "play"

      state.levels = state.levels.filter((level) => !state.hideLevels.includes(level))
    },

    nextLevel(state) {
      if (state.currentLevel < state.levels.length - 1) {
        state.currentLevel = state.currentLevel + 1;
      }
    },

    addWin(state, action: PayloadAction<{ title: string; level: number }>) {
      const { title, level } = action.payload;

      if (!(title in state.players)) return;

      if (state.players[title].includes(level)) {
        return;
      }
      state.players[title].push(level);
    },

    deleteWin(state, action: PayloadAction<{ title: string; level: number }>) {
      const { title, level } = action.payload;

      if (!(title in state.players)) return;

      if (state.players[title].includes(level)) {
        state.players[title] = state.players[title].reduce(
          (acc: number[], el) => {
            if (el !== level) {
              acc.push(el);
            }
            return acc;
          },
          []
        );
      }
    },
  },
});

export const {
  newGame,
  startGame,
  addPlayer,
  deletePlayer,
  addWin,
  deleteWin,
  nextLevel,
  setStatus,
  setShowingLevels,
  resetHideLevels,
} = gameSlice.actions;

export default gameSlice.reducer;
