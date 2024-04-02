import { useAppSelector } from "@/utils/store/store";
import s from "./answer.module.scss";
import db from "@/assets/db/musical-puzzles";


export default function Answer() {
  const { currentLevel } = useAppSelector(
    (state) => state.game
  );
  return (
    <div className={s.answer}>
      <h2 className="title">{db[currentLevel].answer.title}</h2>
      <video
        src={db[currentLevel].answer.source}
        className={s.video}
        controls
        width="600"
        ></video>
    </div>
  );
}
