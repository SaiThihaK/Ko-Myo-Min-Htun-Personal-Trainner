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

    const menuTimeline = gsap.timeline({ paused: true });

    menuTimeline.to(fullPageMenuRef.current, {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    });
    menuTimeline.from(".menu-bg span", {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });
    menuTimeline.from(
      navLinkRef.current,
      {
        duration: 1.5,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );
    menuTimeline.from(
      ".social-links li",
      {
        duration: 1,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );
    menuTimeline.kill();
    menuBar.reverse();
    const toggleButton = menuToggleRef.current;
    toggleButton.addEventListener("click", () => {
      menuBar.reversed(!menuBar.reversed());
      setToggle(!toggle);
      menuTimeline.reversed(!menuTimeline.reversed());
    });

    return () => {
      menuBar.kill();
      menuTimeline.kill();
    };
  }, []);

  if (toggle)
    return (
      <>
        <style jsx>
          {`
            .fullpage-menu {
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              height: 100vh;
              display: none;
            }
            .fullpage-menu-inner {
              display: flex;
              align-items: center;
              height: 100%;
              padding: 100px 60px;
            }
            .menu-bg {
              height: 100%;
              width: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }
            .menu-bg span {
              height: 33.334%;
              width: 100%;
              background: #e50914;
              display: block;
            }

            nav {
              position: relative;
              z-index: 10;
            }

            nav ul {
              list-style-type: none;
            }
            nav li {
              overflow: hidden;
              transition: transform 300ms ease-in-out 0s;
            }
            nav li + li {
              margin-top: 20px;
            }
            nav li a {
              font-size: 100px;
              color: #fff;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: 400;
              display: inline-block;
              line-height: 1;
            }
            nav li:hover {
              transform: translateX(50px);
            }
          `}
        </style>
        <div
          ref={fullPageMenuRef}
          className="fixed top-0 left-0 w-full h-screen"
        >
          <div className="flex items-center justify-center h-full px-24 py-12">
            <div className="absolute inset-0">
              <div className="menu-bg absolute inset-0">
                <span className="block h-1/3 w-full bg-red-600"></span>
                <span className="block h-1/3 w-full bg-red-600"></span>
                <span className="block h-1/3 w-full bg-red-600"></span>
              </div>
            </div>

            <nav className="relative">
              <ul className="main-menu space-y-5">
                {["/", "/about", "/work", "/contact"].map((path, index) => (
                  <li key={index} className={styles.navlink}>
                    <Link
                      ref={navLinkRef}
                      href={path}
                      className="text-4xl text-white uppercase  font-light cursor-pointer"
                    >
                      {path === "/" ? "Home" : path.substring(1).toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-nav-footer absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <ul className="social-links flex space-x-4">
                {["Facebook", "Instagram", "Twitter"].map((social, index) => (
                  <li key={index} className="text-white cursor-pointer">
                    <Link href="#">{social}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );

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
