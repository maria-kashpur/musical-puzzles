import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import { useEffect } from "react";
import {
  setStatus,
} from "@/utils/store/reducers/gameSlice";
import StartGame from "../pages/StartGame/StartGame";
import CreateGame from "../pages/CreateGame/CreateGame";
import PlayGame from "../pages/PlayGame/PlayGame";
import FinishGame from "../pages/FinishGame/FinishGame";

export default function Game() {
  const { players, status } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isUnfinishGame = Object.keys(players).length > 0;
    isUnfinishGame
      ? dispatch(setStatus("start"))
      : dispatch(setStatus("create"));
  }, [dispatch, players]);


  return status === "create" ? (
    <CreateGame />
  ) : status === "start" ? (
    <StartGame />
  ) : status === "play" ? (
    <PlayGame />
  ) : status === "finish" ? (
    <FinishGame/>
  ) : (
    ""
  );
}
