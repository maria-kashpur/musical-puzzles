import s from './player.module.scss'
import useGame from '@/hooks/useGame';

interface Props {
  title: string;
}

export default function Player({ title }: Props) {
  const { currentLevel, players, calculateIsWin, changeIsWin } = useGame();

  return (
    <div className={s.player}>
      <div>{title}: </div>

      <div className={s.range}>
        <div
          className={s.status}
          style={{
            width: `${(players[title].length * 100) / (currentLevel + 1)}%`,
          }}></div>
        <div>{players[title].length}</div>
      </div>

      <button className={s.bnt_win} onClick={() => changeIsWin(title)}>
        {calculateIsWin(title) ? "-" : "+"}
      </button>
    </div>
  );
}
