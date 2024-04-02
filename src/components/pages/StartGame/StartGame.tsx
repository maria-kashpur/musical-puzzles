import { useAppDispatch } from "@/utils/store/store";
import s from "./start_game.module.scss"
import { newGame, setStatus } from "@/utils/store/reducers/gameSlice";

export default function StartGame() {
  const dispatch = useAppDispatch();
  
  return (
    <section className={s.start}>
      <button
        className={s.btn}
        onClick={() => {
          dispatch(newGame());
        }}>
        Новая игра
      </button>
      <button className={s.btn} onClick={() => dispatch(setStatus("play"))}>
        Продолжить игру
      </button>
    </section>
  );
}
