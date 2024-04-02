import s from "./game.module.scss";
import Question from "../pages/PlayGame/Question/Question";
import Answer from "../pages/PlayGame/Answer/Answer";
import Resut from "../pages/PlayGame/Result/Resut";
import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import Slider from "../Slider/Slider";
import { useEffect } from "react";
import NewGame from "../NewGame/NewGame";
import {
  addPlayer,
  newGame,
  nextLevel,
  setStatus,
} from "@/utils/store/reducers/gameSlice";
import StartGame from "../pages/StartGame/StartGame";
import CreateGame from "../pages/CreateGame/CreateGame";
import PlayGame from "../pages/PlayGame/PlayGame";
import FinishGame from "../pages/FinishGame/FinishGame";

export default function Game() {
  const { currentLevel, players, levels, status } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isUnfinishGame = Object.keys(players).length > 0;
    isUnfinishGame
      ? dispatch(setStatus("start"))
      : dispatch(setStatus("create"));
  }, []);


  return status === "create" ? (
    <CreateGame />
  ) : status === "start" ? (
    <StartGame />
  ) : status === "play" ? (
    <PlayGame/>
  ) : status === "finish" ? (
    <FinishGame/>
  ) : (
    ""
  );
}
