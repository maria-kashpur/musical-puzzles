import { useAppSelector } from "@/utils/store/store";
import s from "./answer.module.scss";
import ApiHelper from "@/assets/db/data";

export default function Answer() {
  const { currentLevel, levels } = useAppSelector((state) => state.game);
  const data = ApiHelper.getTask(levels[currentLevel]);

  return (
    <div className={s.answer}>
      <h2 className="title">{data.answer}</h2>
      <video
        src={data.video}
        className={s.video}
        controls
        width="600"></video>
    </div>
  );
}
