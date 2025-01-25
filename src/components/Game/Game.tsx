import { useAppSelector } from "@/utils/store/store";
import CreateGame from "../pages/CreateGame/CreateGame";
import PlayGame from "../pages/PlayGame/PlayGame";
import FinishGame from "../pages/FinishGame/FinishGame";

export default function Game() {
  const { status } = useAppSelector(
    (state) => state.game
  );

  switch (status) {
    case "create":
      return <CreateGame />;
    case "play":
      return <PlayGame />;
    case "finish": 
      return <FinishGame />;
    default:
      return <CreateGame />;
  }
}
