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
  return <div className="w-full h-full">{children}</div>;
};

export default PageWrapper;
