import s from "./PlayGame.module.scss";

import ApiHelper from "@/assets/db/data";
import Resut from "./Resut";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Answer from "./Answer";
import Question from "./Question";
import ControlPanel from "./ControlPanel/ControlPanel";
import useGame from "@/hooks/useGame";



export default function PlayGame() {
  const { numOfLevels, currentLevel, isShowAnswer, isShowResult } = useGame();

  const task = ApiHelper.getTask(1);

  return (
    <div className={s.wrap}>
      <ProgressBar done={currentLevel} all={numOfLevels} unit="%" showValue={true} />

      <ControlPanel />

      <div className={s.board}>
        <Resut isShow={isShowResult} />

        <Answer
          isShow={isShowAnswer}
          videoSrc={task.video}
          title={task.answer}
        />

        <Question imgSrc={task.task} isShow={true} />
      </div>
    </div>
  );
}
