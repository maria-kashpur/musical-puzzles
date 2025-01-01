import { useState } from "react";
import SoundOnIco from "@assets/icons/9111242_volume_high_icon.svg?react";
import SoundOffIco from "@assets/icons/9111135_volume_off_icon.svg?react";
import ControlBnt from "./ControlBnt";

interface ControlSoundBtnProps {
  defaultIsVolume?: boolean;
  hundleSoundOn: () => void;
  hundleSoundOff: () => void;
}

export default function ControlSoundBtn({
  defaultIsVolume,
  hundleSoundOn,
  hundleSoundOff,
}: ControlSoundBtnProps) {
  const [isOn, setIsOn] = useState<boolean>(defaultIsVolume ?? true);

  const icon = isOn ? <SoundOffIco width={50} /> : <SoundOnIco width={50} />;
  const action = () => {
    isOn ? hundleSoundOn() : hundleSoundOff();
    setIsOn((prev) => !prev);
  };

  return (
    <ControlBnt action={action}>{icon}</ControlBnt>
  );
}
