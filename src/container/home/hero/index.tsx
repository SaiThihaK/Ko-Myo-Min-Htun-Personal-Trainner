"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div
        className="container  w-full h-screen absolute top-0 z-[2]"
        style={{
          background: `url('/hero.jpeg') no-repeat center`,
          backgroundSize: "cover", // Ensures the background image covers the entire div
          backgroundPosition: "center", // Centers the background image
          zIndex: "1",
          // clipPath: "polygon(65.97% 0%, 100% 0%, 100% 100%, 22.5% 100%)",
        }}
      >
        <div className="w-full h-full z-[4]">
          <div className="flex w-full h-full flex-col justify-center items-center gap-y-2">
            <div className="text-4xl text-primary text-center  md:text-6xl font-black tracking-wide ">
              Train With Professional
            </div>
            <div className="text-center flex flex-wrap w-full md:w-[700px] leading-7">
              Join our vibrant community of cycling enthusiasts! Whether you're
              a seasoned rider or just starting out, our community is the
            </div>
            <div>
              <Button size="lg" variant="destructive">
                CONTACT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
