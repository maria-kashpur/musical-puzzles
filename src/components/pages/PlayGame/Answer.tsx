import { ReactEventHandler } from "react";
import s from "./PlayGame.module.scss";

interface Props {
  isShow: boolean;
  videoSrc: string;
  isPlay?: ReactEventHandler<HTMLVideoElement> | undefined;
  title: string;
}

export default function Answer({ isShow, videoSrc, title, isPlay}: Props) {
  return (
    <div className={`${s.board__answer} ${isShow ? s.active : ""}`}>
      <div className={s.answer_info}>
        <div className={s.answer}>{title}</div>
      </div>
      <div className={s.task}>
        <video src={videoSrc} className={`${s.video}`} controls onPlay={isPlay}></video>
      </div>
    </div>
  );
}
