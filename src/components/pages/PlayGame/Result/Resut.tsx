import s from "./result.module.scss";
import Player from "./Player/Player";
import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import {
  nextLevel,
  setStatus,
} from "@/utils/store/reducers/gameSlice";

export default function Resut() {
  const { currentLevel, players, levels } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();

  const next = () => {
    if (currentLevel === levels.length - 1) {
      dispatch(setStatus("finish"));
    } else {
      dispatch(nextLevel());
    }
  };

  return (
    <div className={s.players}>
      <h2 className={s.title}>Подсчет результатов:</h2>
      <div className={s.statistic}>
        {Object.entries(players).map((el) => (
          <Player key={el[0]} title={el[0]} />
        ))}
      </div>
      <div>
        <button onClick={() => next()}>{currentLevel !== levels.length - 1 ? "Следующий уровень" : "Финиш"}</button>
      </div>
    </div>
  );
}
