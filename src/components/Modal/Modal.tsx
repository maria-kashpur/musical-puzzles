import s from "./modal.module.scss";
import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  show: boolean;
  close: () => void;
  children: ReactNode;
  type?: "center" | "left" | "right";
}

export default function Modal({ show, close, children, type = "center"}: ModalProps) {
  const closeModal = () => {
    if (close) {
      close();
    }
  };

  useEffect(() => {
    show
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");

    return () => document.body.classList.remove("lock");
  }, [show]);

  const content = (
    <div
      className={`${s.modal_background} ${show ? s.show : ""} ${
        type === "left" ? s.left : s.center
      }`}
      onMouseDown={() => closeModal()}>
      <div
        className={`${s.modal} ${show ? s.show : ""}`}
        onMouseDown={(e) => e.stopPropagation()}>
        <div className={s.modal_content}>{children}</div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}