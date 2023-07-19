import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import breakSound from "../assets/audio/break.mp3";
import workSound from "../assets/audio/work.mp3";

type State = {
  workTime: string;
  breakTime: string;
  seconds: number;
  minutes: number;
  started: boolean;
  workSound: HTMLAudioElement;
  breakSound: HTMLAudioElement;
  type: "work" | "break";
};

type Actions = {
  stopTimer: () => void;
  startTimer: () => void;
  toggleTimer: () => void;
  setWorkTime: (value: string) => void;
  setBreakTime: (value: string) => void;
  setSeconds: (value: number) => void;
  setMinutes: (value: number) => void;
  setType: (value: "work" | "break") => void;
};

export const useTimer = create(
  immer<State & Actions>((set) => ({
    workTime: "25",
    breakTime: "5",
    seconds: 0,
    minutes: 0,
    started: false,
    breakSound: new Audio(breakSound),
    workSound: new Audio(workSound),
    type: "work",
    setType: (value) =>
      set((state) => {
        state.type = value;
      }),
    stopTimer: () =>
      set((state) => {
        state.started = false;
      }),
    startTimer: () =>
      set((state) => {
        state.started = true;
      }),
    toggleTimer: () =>
      set((state) => {
        if (state.breakTime !== "0" && state.workTime !== "0")
          state.started = !state.started;
      }),
    setWorkTime: (value) =>
      set((state) => {
        const regex = /^[0-9\b]+$/;
        if ((regex.test(value) || !value.length) && value.length < 3)
          state.workTime = value;
      }),
    setBreakTime: (value) =>
      set((state) => {
        const regex = /^[0-9\b]+$/;
        if ((regex.test(value) || !value.length) && value.length < 3)
          state.breakTime = value;
      }),
    setSeconds: (value) =>
      set((state) => {
        state.seconds = value;
      }),
    setMinutes: (value) =>
      set((state) => {
        state.minutes = value;
      }),
  }))
);
