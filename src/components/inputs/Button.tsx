import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-app uppercase py-5 md:px-[80px]  w-full rounded-md text-3xl border border-app-gray`}
      {...rest}
    >
      {children}
    </button>
  );
}
