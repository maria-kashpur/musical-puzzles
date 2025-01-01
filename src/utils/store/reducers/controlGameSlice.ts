import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ControlGameState {
  isPlay: boolean;
  isVolume: boolean;
  isShowAnswer: boolean;
  isShowResult: boolean;
  isShowLevels: boolean;
}

const initialState: ControlGameState = {
  isPlay: false,
  isVolume: true,
  isShowAnswer: false,
  isShowResult: false,
  isShowLevels: true,
};

const controlGameSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    setIsPlay(state, action: PayloadAction<ControlGameState["isPlay"]>) {
      state.isPlay = action.payload;
    },
    setIsVolume(state, action: PayloadAction<ControlGameState["isVolume"]>) {
      state.isVolume = action.payload;
    },
    setIsShowAnswer(
      state,
      action: PayloadAction<ControlGameState["isShowAnswer"]>
    ) {
      state.isShowAnswer = action.payload;
    },
    seIsShowResult(
      state,
      action: PayloadAction<ControlGameState["isShowAnswer"]>
    ) {
      state.isShowResult = action.payload;
    },
    setIsShowLevels(
      state,
      action: PayloadAction<ControlGameState["isShowLevels"]>
    ) {
      state.isShowLevels = action.payload;
    },
  },
});

export const {
  setIsPlay,
  setIsVolume,
  setIsShowAnswer,
  seIsShowResult, 
  setIsShowLevels,
} = controlGameSlice.actions;

export default controlGameSlice.reducer;