import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import s from "./CreateGame.module.scss";
import Player from "./Player";
import { deletePlayer } from "@/utils/store/reducers/gameSlice";

export default function Players() {
  const dispatch = useAppDispatch();
  const {players} = useAppSelector(store => store.game)

  return (
    <ul className={s.players}>
      {Object.keys(players).map((player) => (
        <Player
          key={player}
          deletePlayer={() => dispatch(deletePlayer(player))}
          title={player}
        />
      ))}
    </ul>
  );
}
