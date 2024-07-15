import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("container py-6 gap-6   md:py-[4rem]", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
