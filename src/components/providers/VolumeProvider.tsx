import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IProps {
  children: React.ReactNode;
}

export type VolumeContextType = "on" | "off";

interface VolumeContext {
  volume: VolumeContextType;
  setVolume?: TypeSetState<VolumeContext["volume"]>;
}

function getVolume() {
  const ls = localStorage.getItem("volume");
  if (ls === "on" || ls === "off") {
    return ls;
  }
  return "on";
}

export const VolumeContext = createContext<VolumeContext>({ volume: getVolume() });

export default function VolumeProvider({ children }: IProps) {
  const [volume, setVolume] = useState<VolumeContextType>(getVolume());

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}
