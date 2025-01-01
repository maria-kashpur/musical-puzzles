import {
  addWin,
  deleteWin,
  nextLevel,
  setStatus,
} from "@/utils/store/reducers/gameSlice";
import { seIsShowResult, setIsPlay, setIsShowAnswer, setIsShowLevels } from "@/utils/store/reducers/controlGameSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/store";

export default function useGame() {
  const {
    currentIndexOfLevel,
    players,
    levels,
  } = useAppSelector((state) => state.game);
  
  const { 
    isPlay, 
    isVolume, 
    isShowAnswer, 
    isShowResult, 
    isShowLevels 
  } = useAppSelector(
    (state) => state.control
  );

  const numOfLevels = levels.length;
  const currentLevel = currentIndexOfLevel + 1;
  const currentId = levels[currentIndexOfLevel];

  const dispatch = useAppDispatch();

  const calculateIsWin = (title: string): boolean => {
    return players[title].includes(currentLevel);
  };

  const calculateIsFinishGame = (): boolean => {
    return currentLevel >= levels.length - 1;
  };

  const changeIsWin = (title: string): void => {
    if (calculateIsWin(title)) {
      dispatch(deleteWin({ title, level: currentLevel }));
    } else {
      dispatch(addWin({ title, level: currentLevel }));
    }
  };

  const hundleNextLevel = () => {
    if (currentLevel === levels.length - 1) {
      dispatch(setStatus("finish"));

      dispatch(setIsPlay(false));
    } else {
      dispatch(nextLevel());
    }
  };

  const hundlePlay = () => {
    dispatch(setIsPlay(true));
    console.log("таймер запущен");
  };

  const hundlePause = () => {
    dispatch(setIsPlay(false));
    console.log("таймер на паузе");
  };

  const hundleRestart = () => {
    console.log("restart");
  };

  const hundleSoundOn = () => {
    console.log("звук включен");
  };

  const hundleSoundOff = () => {
    console.log("звук выключен");
  };

  const hundleShowAnswer = (value: boolean) => {
    console.log(value ? "показать ответ" : "скрыть ответ");
    dispatch(setIsShowAnswer(value));
  };

  const hundleShowResult = (value: boolean) => {
    console.log(value ? "показать результаты" : "скрыть результаты");
    dispatch(seIsShowResult(value));
  };

  const hundleShowLevels = (value: boolean) => {
    console.log(value ? "показать уровни": "скрыть уровни");
    dispatch(setIsShowLevels(value));
  };

  return {
    currentLevel,
    players,
    levels,
    numOfLevels,
    currentId,

    isPlay,
    isVolume,
    isShowAnswer,
    isShowResult,
    isShowLevels,

    calculateIsWin,
    changeIsWin,
    hundleNextLevel,
    calculateIsFinishGame,

    hundlePlay,
    hundlePause,
    hundleRestart,
    hundleSoundOn,
    hundleSoundOff,
    hundleShowAnswer,
    hundleShowResult,
    hundleShowLevels,
    
  };
}
