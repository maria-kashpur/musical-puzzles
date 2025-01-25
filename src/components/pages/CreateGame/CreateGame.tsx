import s from "./CreateGame.module.scss";
import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import { startGame } from "@/utils/store/reducers/gameSlice";
import Levels from "./Levels";
import NewPlayer from "./NewPlayer";
import Players from "./Players";

export default function CreateGame() {
  const {players} = useAppSelector(state => state.game);
  const playersCount = Object.keys(players).length;

  const dispatch = useAppDispatch()

  return (
    <>
      <section className="game">
        <h2 className="title">Добавьте команду или игрока:</h2>
        <NewPlayer />
        <Players />
      </section>

      <br></br>

      <section className="game">
        <Levels></Levels>
      </section>

      <br></br>

      {playersCount === 0 ? null : (
        <section className="game">
          <button
            className={`${s.btn} ${s.start_btn}`}
            disabled={playersCount === 0}
            onClick={() => dispatch(startGame())}>
            Начать игру
          </button>
        </section>
      )}
    </>
  );
}
