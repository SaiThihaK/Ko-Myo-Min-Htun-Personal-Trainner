"use client";

import { Input } from "@/components/ui/input";

import gsap, { Power2 } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type Props = {};

const Navbar: React.FC<Props> = (props) => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const [toggle, setToggle] = useState(false);
  const fullPageMenuRef = useRef<HTMLDivElement>(null);
  const navLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuToggleRef.current) {
      return;
    }

    const menuBar = gsap.timeline({ paused: true });
    console.log(menuBar);

    // Animating the first bar to rotate into a "/" shape
    menuBar.to(
      ".bar-1",
      0.5,
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    // Hiding the middle bar
    menuBar.to(
      ".bar-2",
      0.5,
      {
        autoAlpha: 0,
      },
      "start"
    );

    menuBar.to(
      ".bar-3",
      0.5,
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    menuBar.reverse();
    const toggleButton = menuToggleRef.current;
    toggleButton.addEventListener("click", () => {
      menuBar.reversed(!menuBar.reversed());
      setToggle(!toggle);
    });

    return () => {
      menuBar.kill();
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full absolute top-0 z-[5]">
      <div className="flex flex-start">
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
      <button
        className="block md:hidden bg-red-600 border-none cursor-pointer p-3 rounded-full z-[99]"
        ref={menuToggleRef}
      >
        <svg
          viewBox="0 0 12 10"
          className={styles.hamburger}
          height="30px"
          width="30px"
        >
          <path d="M10,2 L2,2" className="bar-1" id="bar-1"></path>
          <path d="M2,5 L10,5" className="bar-2" id="bar-2"></path>
          <path d="M10,8 L2,8" className="bar-3" id="bar-3"></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
