import { Pazzle } from "@/assets/db/data";
import { MouseEventHandler } from "react";
import s from "./CreateGame.module.scss";

import Eye from "@assets/icons/eys.svg?react";

interface LevelProps {
  id: Pazzle["id"];
  title: string;
  imgSrc: Pazzle["task"];
  isShow: boolean;
  setShowingLevel: MouseEventHandler<HTMLDivElement>;
}

export function Level({
  id,
  title,
  isShow,
  imgSrc,
  setShowingLevel,
}: LevelProps) {
  return (
    <div
      className={`${s.level} ${isShow ? s.show : s.hide}`}
      onClick={setShowingLevel}
      title={title}>
      <div className={s.lewel__row}>
        <div>id: {id}</div>
        <button className={s.level__bnt}>
          <Eye className={isShow ? "show" : ""} height={50} width={50}></Eye>
        </button>
      </div>
      <div className={s.level__img}>
        <img src={imgSrc} alt="answer" className={isShow ? s.show : s.hide} />
      </div>
    </div>
  );
}
