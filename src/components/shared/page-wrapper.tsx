"use client";
import { useToggle } from "@/provider/context-provider";
import gsap, { Expo } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Menubar from "./navbar/menu-bar";
import Navbar from "./navbar/navbar";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full px-4 relative">
      <Navbar />
      <div className="pt-[100px] w-full h-screen">{children}</div>
    </div>
  );
};

export default PageWrapper;
