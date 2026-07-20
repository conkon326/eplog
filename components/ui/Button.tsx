import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
        rounded-full
        border
        border-[var(--primary)]
        bg-[var(--surface)]
        px-8
        py-3
        text-sm
        tracking-wide
        text-[var(--primary)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-[var(--primary)]
        hover:text-white
      "
    >
      {children}
    </button>
  );
}