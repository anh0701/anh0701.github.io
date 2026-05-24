import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: Props) {
  return (
    <div
      className={`
        rounded-[32px]
        border border-white/5
        bg-white/[0.03]
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
