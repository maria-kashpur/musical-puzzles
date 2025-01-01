import s from "./cantrolPanel.module.scss";

import HelpIco from "@assets/icons/9165754_question_help_icon.svg?react";
import WinnerIco from "@assets/icons/stars.svg?react";

import useGame from "@/hooks/useGame";
import ControlSoundBtn from "./ControlSoundBtn";
import ControlPlayBtns from "./ControlPlayBtns";
import ControlBnt from "./ControlBnt";

export default function ControlPanel() {
  const {
    isVolume,
    isShowAnswer,
    isShowResult,
    currentLevel,
    currentId,
    hundlePlay,
    hundlePause,
    hundleRestart,
    hundleSoundOn,
    hundleSoundOff,
    hundleShowAnswer,
    hundleShowResult,
  } = useGame();

  return (
    <div className={s.control}>
      <div className={s.control__group}>
        <ControlPlayBtns
          hundlePlay={hundlePlay}
          hundlePause={hundlePause}
          hundleRestart={hundleRestart}
        />
        <ControlSoundBtn
          defaultIsVolume={isVolume}
          hundleSoundOn={hundleSoundOn}
          hundleSoundOff={hundleSoundOff}
        />
      </div>

      <div className={s.control__group}>
        <div>
          <span>Задание: </span>
          <span>{`${currentLevel} `}</span>
          <span className={s.level__id}>({`${currentId}`})</span>
        </div>
      </div>

      <div className={s.control__group}>
        <ControlBnt
          action={() => hundleShowAnswer(!isShowAnswer)}
          isActive={isShowAnswer}
          children={<HelpIco width={50} />}
        />

        <ControlBnt
          action={() => hundleShowResult(!isShowResult)}
          isActive={isShowResult}
          children={<WinnerIco width={50} />}
        />
      </div>
    </div>
  );
}
