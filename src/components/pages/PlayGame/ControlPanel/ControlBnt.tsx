import { ReactElement } from "react";
import s from "./cantrolPanel.module.scss"

interface ControlBtnProps {
  style?: CSSModuleClasses;
  isActive?: boolean;
  action: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}

export default function ControlBnt({ style, isActive=false, action, children }: ControlBtnProps) {
  return (
    <button
      onClick={action}
      className={`${s.control_btn} ${isActive ? s.active : ""} ${style ?? ""}`}>
      {children}
    </button>
  );
}
