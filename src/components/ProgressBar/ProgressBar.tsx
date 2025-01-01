import { ReactElement } from "react";
import s from "./ProgressBar.module.scss"

interface ProgressBarProps {
  all: number;
  done: number;
  unit?: string;
  showValue: boolean;
  children?: ReactElement;
}

export default function ProgressBar({ all, done, showValue, unit = "", children }: ProgressBarProps) {
  const perc = (done * 100) / all;

  return (
    <div className={s.wrap}>
      <div className={s.progress_box}>
        <div className={s.text}>
          {showValue ? `${Math.ceil(perc)}${unit}` : " "}
          {children ?? null}
        </div>
        <div className={s.progress_line} style={{ width: perc + "%" }}></div>
      </div>
    </div>
  );
}
