import { useToggle } from "@/provider/context-provider";
import React from "react";
import Navbar from "./navbar/navbar";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full  px-4 relative">
      <Navbar />
      <div className="pt-[100px] w-full h-screen">{children}</div>
    </div>
  );
};

export default PageWrapper;
