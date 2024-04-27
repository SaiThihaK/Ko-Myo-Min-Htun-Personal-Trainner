"use client";

import PageWrapper from "@/components/shared/page-wrapper";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/provider/context-provider";

const HomePage = () => {
  return (
    <PageWrapper>
      <div className="w-full h-full flex  justify-start items-center z-4">
        <style jsx>
          {`
            @keyframes backgroundScroll {
              0% {
                background-position: 0% center;
              }
              100% {
                background-position: 100% center;
              }
            }

            .movingBackground {
              background-image: url("/wheel.jpeg");
              color: transparent;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              animation: backgroundScroll 10s linear infinite;
            }
          `}
        </style>
        <div className="flex flex-col gap-y-4">
          <div className="text-3xl md:text-6xl font-bold tracking-widest font-work  text-start text-red-600">
            GEAR
          </div>
          <div
            className="text-5xl md:text-9xl font-work font-bold tracking-widest movingBackground"
            style={{
              backgroundImage: `url(/wheel.jpeg)`,
              color: "transparent",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            CYCLE
          </div>
          <div className="text-start flex flex-wrap w-full md:w-[450px] font-work">
            Join our vibrant community of cycling enthusiasts! Whether you're a
            seasoned rider or just starting out, our community is the perfect
            place to share your passion for cycling. Connect with fellow
            cyclists, exchange tips, participate in discussions, and stay
            updated on the latest cycling events and news.
          </div>
          <div className="">
            <Button variant="destructive">BOOK AN ORDER</Button>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block w-full h-screen absolute top-0 z-1"
        style={{
          background: `linear-gradient(rgba(255, 0, 0, 0.35), rgba(255, 0, 0, 0.35)), url('/chain.jpeg') no-repeat center`,
          backgroundSize: "cover", // Ensures the background image covers the entire div
          backgroundPosition: "center", // Centers the background image
          clipPath: "polygon(73% 0, 100% 0, 84% 100%, 56% 100%)", // Keeps your existing clip path
        }}
      />
      <div className="w-full h-full absolute top-0 flex justify-center items-center z-1"></div>
    </PageWrapper>
  );
};

export default HomePage;
