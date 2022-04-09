import { FC, MouseEventHandler } from "react";

interface BtnProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export const CounterBtn: FC<BtnProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={"bg-blue-500 text-white p-2 rounded-sm " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
