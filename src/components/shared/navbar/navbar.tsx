"use client";

import { Input } from "@/components/ui/input";
import { useToggle } from "@/provider/context-provider";

import gsap, { Power2 } from "gsap";
import Image from "next/image";

import React, { useEffect, useRef } from "react";
import Menubar from "./menu-bar";
import styles from "./styles.module.css";

type Props = {};

const Navbar: React.FC<Props> = (props) => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex justify-between items-center w-full absolute top-0 z-[6]">
      <div className="flex flex-start p-3">
        <Image src="/ferrari.jpeg" alt="car logo" width={100} height={100} />
      </div>

      <div className="hidden md:flex gap-x-8 justify-center flex-1">
        <span className="text-red-600 flex flex-col">
          <span>Home</span>
        </span>
        <div>Models</div>
        <div>Best Sellers</div>
      </div>
      <div className="flex-1 justify-center hidden md:flex">
        <Input
          className="w-[300px] bg-[#db232f] p-3 rounded-full placeholder:text-white h-30 text-white"
          placeholder="Search"
        />
      </div>
      {/* Mobile Menu */}
      <Menubar />
    </div>
  );
};

export default Navbar;
