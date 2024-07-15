import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Header: FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "w-full py-6 text-primary font-semibold  text-center text-3xl md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Header;
