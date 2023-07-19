import { useEffect } from "react";
import { useTimer } from "../state/TimerState";
import { useInterval } from "../hooks/useInterval";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Timer() {
  const {
    started,
    workTime,
    breakTime,
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    type,
    setType,
    breakSound,
    workSound,
  } = useTimer();

  const switchType = () => {
    if (type === "work") {
      void breakSound.play();
      setType("break");
      setMinutes(Number(breakTime));
    } else {
      void workSound.play();
      setType("work");
      setMinutes(Number(workTime));
    }
  };
  const tick = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes === 0 && seconds === 0) {
      switchType();
    } else {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
  };
  useEffect(() => {
    setMinutes(Number(workTime));
    setSeconds(0);
    setType("work");
  }, [workTime, setSeconds, setMinutes, setType]);
  useInterval(
    () => {
      tick();
    },
    started ? 1000 : null
  );
  const persentage =
    ((minutes * 60 + seconds) * 100) /
    (Number(type === "work" ? workTime : breakTime) * 60);
  return (
    <div className="max-w-[500px] w-full bg-app rounded-full">
      <CircularProgressbar
        value={persentage}
        text={`${minutes < 10 ? `0${minutes}` : minutes} : ${
          seconds < 10 ? `0${seconds}` : seconds
        }`}
        styles={buildStyles({
          textSize: "23px",
          textColor: "#aaa",
          trailColor: "transparent",
          pathColor: `${
            type === "work" ? "rgba(255, 255, 255, 0.14)" : "#03C988"
          }`,
        })}
      />
    </div>
  );
}
