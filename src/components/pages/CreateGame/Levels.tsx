import ApiHelper from "@/assets/db/data";
import s from "./CreateGame.module.scss";

import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import { setShowingLevels } from "@/utils/store/reducers/gameSlice";
import { Level } from "./Level";
import { useState } from "react";
import { resetHideLevels } from "@/utils/store/reducers/gameSlice"


export default function Levels() {
  const { hideLevels } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const levels = ApiHelper.getTasks();

  const showLevelsCount = levels.length - hideLevels.length; 

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <h2 className="title">Настройте отображение уровней:</h2>
      <div className={s.levels_setting__header}>
        <span>Внимание! Игроки не должны видеть процесс настройки.</span>
        <span>Добавлено уровней: {showLevelsCount}</span>
        <span>
          Скрыто уровней: {hideLevels.length}
          <button
            className={`${s.btn} ${s.levels_reset__btn}`}
            onClick={() => dispatch(resetHideLevels())}
            disabled={hideLevels.length <= 0}>
            Сбросить
          </button>
        </span>
      </div>
      <button
        className={`${s.btn} ${s.start_btn}`}
        onClick={() => setIsSettingsOpen((prev) => !prev)}>
        {isSettingsOpen ? "Скрыть настройку" : "Продолжить настройку"}
      </button>
      <div className={`${s.levels} ${isSettingsOpen ? s.show : ""}`}>
        {levels.map((level) => (
          <Level
            key={level.id}
            id={level.id}
            title={level.answer}
            imgSrc={level.task}
            isShow={!hideLevels.includes(level.id)}
            setShowingLevel={() => dispatch(setShowingLevels(level.id))}
          />
        ))}
      </div>
    </>
  );
}