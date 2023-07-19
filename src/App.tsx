import Timer from "./components/Timer";
import Button from "./components/inputs/Button";
import Input from "./components/inputs/Input";
import { useTimer } from "./state/TimerState";

function App() {
  const {
    started,
    workTime,
    breakTime,
    toggleTimer,
    setWorkTime,
    setBreakTime,
  } = useTimer();

  return (
    <div className="px-4 space-y-5 bg-black/70 w-screen flex h-screen flex-col  items-center justify-center">
      <Timer />
      <div className="w-full max-w-[567px] flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            value={workTime}
            maxLength={2}
            disabled={started}
            onChange={(e) => setWorkTime(e.target.value)}
            increment={() => setWorkTime(`${Number(workTime) + 1}`)}
            decrement={() => setWorkTime(`${Number(workTime) - 1}`)}
            type="text"
            placeholder="Enter work time"
          />
          <Input
            value={breakTime}
            disabled={started}
            maxLength={2}
            onChange={(e) => setBreakTime(e.target.value)}
            increment={() => setBreakTime(`${Number(breakTime) + 1}`)}
            decrement={() => setBreakTime(`${Number(breakTime) - 1}`)}
            type="text"
            placeholder="Enter break time"
          />
        </div>
        <Button onClick={toggleTimer}>{started ? "pause" : "start"}</Button>
      </div>
    </div>
  );
}

export default App;
