import s from "./PlayGame.module.scss";
import Player from "./Player/Player";
import useGame from "@/hooks/useGame";

interface ResutProps {
  isShow: boolean;
}

export default function Resut({ isShow }: ResutProps) {
  const { players, hundleNextLevel, calculateIsFinishGame } = useGame();

  return (
    <div
      className={`${s.players} ${s.board__result} ${isShow ? s.active : ""}`}>
      <div className={s.statistic}>
        {Object.entries(players).map((el) => (
          <Player key={el[0]} title={el[0]} />
        ))}
      </div>

      <div>
        <button className={s.btn_next} onClick={hundleNextLevel}>
          {calculateIsFinishGame() ? "Финиш" : "Следующий уровень"}
        </button>
      </div>
    </div>
  );
}
