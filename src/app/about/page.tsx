"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import React, { useRef } from "react";

type Props = {};

const page = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const coverPage = gsap.timeline({ paused: true });
      if (coverRef.current) {
        coverPage.to(coverRef.current.querySelectorAll("span"), {
          y: 0,
          stagger: 0.1,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: coverRef.current.querySelector("span"),
        });
      }

      coverPage.play();
    },
    { scope: coverRef }
  );
  return (
    <div className="w-full h-full relative" ref={containerRef}>
      <div
        className="w-full h-full relative flex justify-center gap-y-4  flex-col px-8 text-white z-[2]"
        ref={coverRef}
        style={{
          background: `url('/about.jpg') no-repeat center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        {["Get", "Ready", "To", "Rock"].map((text, index) => (
          <span
            key={index}
            className="text-gray-400 opacity-0 translate-y-[200px] py-2   text-6xl font-bold font-ato "
          >
            {text}
          </span>
        ))}
        <div className="border-l-4 border-l-red-600 p-2">
          21-23 July Yangon Myanmar
        </div>

        <Button className="w-[150px] p-3 rounded-none bg-red-600 hover:bg-red-800 mt-2">
          Buy Ticket
        </Button>
      </div>
      <div className="w-full h-screen">Hello</div>
    </div>
  );
};

export default page;
