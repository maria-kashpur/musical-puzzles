import { useAppDispatch, useAppSelector } from '@/utils/store/store';
import s from './finish_game.module.scss';
import WinIco from '@assets/icons/416372_champion_cup_sports_winner_icon.svg?react'
import { newGame } from '@/utils/store/reducers/gameSlice';

export default function FinishGame() {
  const { players } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();

  let maxResult = 0;

  const results = Object.entries(players).map((el) => {
    const [title, wins] = el;
    const score = wins.length
    if (maxResult < score) {
      maxResult = score
    }
    return [title, score]
  })


  return (
    <section className="game">
      <h2 className="title">Результаты игры:</h2>
      <div className={s.result}>
        {results.map((el) => (
          <div key={el[0]} className={s.result__item}>
            <span className={s.player}>{el[0]}:</span>
            <span>{el[1]}</span>
            <span>{el[1] === maxResult && maxResult > 0 ? <WinIco height={50} /> : ""}</span>
          </div>
        ))}
      </div>
      <div onClick={() => dispatch(newGame())} className="btn">Новая игра</div>
    </section>
  );
}
