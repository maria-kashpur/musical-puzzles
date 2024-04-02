import { useLayoutEffect, useRef, useState } from "react";

interface Timer {
  readonly value: number;
  readonly status: "start" | "tick" | "pause" | "finish";
  play: () => void;
  stop: () => void;
  pause: () => void;
  soundOff: boolean;
  setsoundOff: (value: boolean) => void;
}

export default function useTimer(initial: number) {
  const [startAt, setStartAt] = useState(initial);
  const [value, setValue] = useState(initial);
  const [startDate, setStartDate] = useState<number>(0);
  const [isPlay, setIsPlay] = useState(false);
  const [status, setStatus] = useState<Timer['status']>("start");
  const audio = useRef(
    new Audio("./audio/alarm_clock_ticking_loop_002.mp3")
  );
  const [soundOff, setsoundOff] = useState(false)
  audio.current.muted = soundOff;

  const down = () => {
    setValue(() => {
      const current = startAt - Math.trunc((Date.now() - startDate) / 1000);
      const result = Math.max(0, current)
      if (result === 0) {
        setStatus("finish");
        setIsPlay(false)
      }
      return result;
    });
  };

  const play = () => {
    setStartDate(Date.now);
    setIsPlay(true);
    setStatus("tick");
  };

  const stop = () => {
    setValue(initial);
    setStartDate(0);
    setIsPlay(false);
    setStartAt(initial);
    setStatus("start");
  };

  const pause = () => {
    setStartAt(value);
    setIsPlay(false);
    setStatus("pause");
  };

  useLayoutEffect(() => {
    if (audio.current.ended) {
      audio.current.load();
    }

    if (!isPlay) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  }, [isPlay, value]);

  useLayoutEffect(() => {
    if (!isPlay) {
      return;
    }

    const interval = setInterval(() => {
      down();
    }, 1000);
    
    return () => {
      clearInterval(interval);
      audio.current.pause();
    };
  }, [isPlay]);

  const result: Timer = {
    value,
    status,
    play,
    stop,
    pause,
    soundOff,
    setsoundOff,
  };

  return result;
}
