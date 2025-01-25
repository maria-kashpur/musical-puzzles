import s from "./CreateGame.module.scss";
import DeleteIco from "@assets/icons/8679882_delete_bin_2_line_icon.svg?react";

interface PlayerProps {
  title: string;
  deletePlayer: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Player({
  title,
  deletePlayer,
}: PlayerProps) {
  return (
    <li className={s.player}>
      <div className={s.player__title}>{title}</div>
      <div className={s.players__control}>
        <button className={s.btn} onClick={deletePlayer}>
          <DeleteIco height={20} />
        </button>
      </div>
    </li>
  );
}
