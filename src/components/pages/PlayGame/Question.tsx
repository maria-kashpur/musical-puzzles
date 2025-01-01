import s from "./PlayGame.module.scss";

interface Props {
  imgSrc: string;
  isShow: boolean
}

export default function Question({ imgSrc, isShow }: Props) {
  return (
    <div className={`${s.board__question} ${isShow ? s.active : ""}`}>
      <div className={s.question_info}>
        <div className={s.timer}>
          <span>Время: </span>
          <span>00:00</span>
        </div>
      </div>
      <div className={s.img}>
        <img src={imgSrc} alt="task" />
      </div>
    </div>
  );
}
