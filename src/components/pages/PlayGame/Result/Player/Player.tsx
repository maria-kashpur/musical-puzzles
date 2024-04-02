import { useEffect, useState } from 'react';
import s from './player.module.scss'
import { useAppDispatch, useAppSelector } from '@/utils/store/store';
import { addWin, deleteWin } from '@/utils/store/reducers/gameSlice';

interface Props {
  title: string;
}

export default function Player({title}: Props) {
  const { currentLevel, players } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const [isWin, setIsWin] = useState(false);
  const [range, setRange] = useState(0)

  useEffect(() => {
    setIsWin(players[title].includes(currentLevel));
    setRange(players[title].length);
  })

  const toggleRange = () => {
    if (isWin) {
      dispatch(deleteWin({ title, level: currentLevel }));

    } else {
      dispatch(addWin({ title, level: currentLevel }));
    }
  }

  return (
    <div className={s.player}>
      <div>{title}:</div>
      <div className={s.range}>
        <div
          className={s.status}
          style={{
            width: `${players[title].length * 100 / (currentLevel + 1)}%`,
          }}></div>
        <div>{players[title].length}</div>
      </div>
      <button onClick={toggleRange}>{isWin ? "-" : "+"}</button>
    </div>
  );
}
