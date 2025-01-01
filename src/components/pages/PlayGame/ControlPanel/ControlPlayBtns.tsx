import { useState } from "react";

import StartIco from "@assets/icons/8680147_play_circle_video_icon.svg?react";
import PauseIco from "@assets/icons/3671827_outline_pause_icon.svg?react";
import ResturtIco from "@assets/icons/restart.svg?react";
import ControlBnt from "./ControlBnt";


interface ControlPlayBtnsProps {
  hundlePlay: () => void;
  hundlePause: () => void;
  hundleRestart: () => void;
}

export default function ControlPlayBtns({
  hundlePause,
  hundlePlay,
  hundleRestart,
}: ControlPlayBtnsProps) {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const icon = isPlay ? <PauseIco width={50} /> : <StartIco width={50} />;

  const action = (type: "play" | "pause" | "restart") => {
    switch (type) {
      case "play":
      case "pause":
        setIsPlay((prev) => !prev);
        type === "play" ? hundlePlay() : hundlePause();
        break;
      case "restart":
        setIsPlay(false);
        hundleRestart();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ControlBnt
        action={() => action(isPlay ? "pause" : "play")}
        children={icon}
      />
      <ControlBnt
        action={() => action("restart")}
        children={<ResturtIco width={50} />}
      />
    </>
  );
}
