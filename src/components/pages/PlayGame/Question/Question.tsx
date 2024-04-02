import { useState } from "react";
import s from "./question.module.scss";
import HelpIco from "@assets/icons/9165754_question_help_icon.svg?react";
import db from "@/assets/db/musical-puzzles";
import useTimer from "@/hooks/useTimer";
import PauseIco from "@assets/icons/3671827_outline_pause_icon.svg?react";
import SoundOnIco from "@assets/icons/9111242_volume_high_icon.svg?react";
import SoundOffIco from "@assets/icons/9111135_volume_off_icon.svg?react";
import StartIco from "@assets/icons/8680147_play_circle_video_icon.svg?react";
import AlarmIco from "@assets/icons/alarm-clock-154665.svg?react";
import { useAppSelector } from "@/utils/store/store";


export default function Question() {
  const { currentLevel } = useAppSelector(
    (state) => state.game
  );

  const [isActive, setActive] = useState(false);
  const { value, pause, play, status, soundOff, setsoundOff } = useTimer(10);

  return (
    <div className={s.answer}>
      <div className={s.sidebar}>
        <div className={s.options}>
          <div
            className={`${s.start} 
            ${status === "start" || status === "pause" ? "" : s.unactive}`}>
            <button onClick={play}>
              <StartIco height={150} />
            </button>
          </div>
          <button
            className={`${status === "finish" ? s.hide : ""}`}
            onClick={pause}>
            <PauseIco height={50} />
          </button>
          <button onClick={() => setsoundOff(!soundOff)}>
            {soundOff ? (
              <SoundOffIco height={50} />
            ) : (
              <SoundOnIco height={50} />
            )}
          </button>
          <button onClick={() => setActive(!isActive)}>
            <HelpIco height={50} />
          </button>
        </div>

        <div className={`${s.time} ${value < 4 ? s.red : ""}`}>
          {value === 0 ? <AlarmIco height={100} /> : value}
        </div>
      </div>

      <div className={s.question}>
        {db[currentLevel].rebus.map((el) => (
          <div className={s.question__item} key={el}>
            <img src={el} alt="rebus" />
          </div>
        ))}
        <div className={`${s.question__item} ${isActive ? "" : s.unactive}`}>
          <img src={db[currentLevel].help} alt="help" />
        </div>
      </div>
    </div>
  );
}
