import { InputHTMLAttributes } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  decrement?: () => void;
  increment?: () => void;
}
export default function Input({
  decrement,
  increment,
  disabled,
  ...rest
}: Props) {
  return (
    <div className="flex bg-app border border-app-gray rounded-md  ">
      <input
        disabled={disabled}
        className="w-full outline-none  py-5 px-3 h-full  text-xl bg-transparent"
        {...rest}
      />
      <div className="grid grid-rows-2">
        <div
          onClick={() => {
            if (!disabled && increment) increment();
          }}
          className="grid place-content-center cursor-pointer hover:bg-app-gray p-1"
        >
          <ChevronUpIcon className="h-6 w-6 text-gray-400" />
        </div>
        <div
          onClick={() => {
            if (!disabled && decrement) decrement();
          }}
          className="grid place-content-center cursor-pointer hover:bg-app-gray p-1"
        >
          <ChevronDownIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
