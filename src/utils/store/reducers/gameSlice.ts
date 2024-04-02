import musicalPazzles from "@/assets/db/musical-puzzles";
import shuffleArray from "@/utils/shuffleArray";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  title: string;
  wins: number[];
}

interface GameState {
  status: "start" | "create" | "play" | "finish";
  levels: number[];
  currentLevel: number;
  players: { [key: string]: number[] };
}

const initialState: GameState = {
  status: "start",
  levels: [],
  currentLevel: 0,
  players: {},
};

const gameSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<GameState["status"]>) {
      state.status = action.payload
    },
    newGame(state) {
      state.status = "create";
      state.currentLevel = 0;
      state.levels = shuffleArray(
        Array.from({ length: musicalPazzles.length }).map((_, index) => index)
      );
      state.players = {};
    },

    addPlayer(state, action: PayloadAction<string>) {
      state.players[action.payload] = [];
    },

    deletePlayer(state, action: PayloadAction<PlayerState["title"]>) {
      delete state.players[action.payload];
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
  addPlayer,
  deletePlayer,
  addWin,
  deleteWin,
  nextLevel,
  setStatus,
} = gameSlice.actions;

export default gameSlice.reducer;
