"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div
        className="container w-full min-h-screen bg-fixed bg-hero bg-cover bg-no-repeat bg-center"
        // style={{
        //   background: `url('/hero.jpeg') no-repeat center`,
        //   backgroundSize: "cover", // Ensures the background image covers the entire div
        //   backgroundPosition: "center", // Centers the background image
        //   zIndex: "1",
        //   clipPath: "polygon(65.97% 0%, 100% 0%, 100% 100%, 22.5% 100%)",
        // }}
      >
        <div className="w-full h-screen  z-[4]">
          <div className="flex w-full h-full flex-col space-y-2 justify-center items-center gap-y-2">
            <div className="text-4xl w-full text-primary text-center  md:text-6xl font-black tracking-wide ">
              Train With Professional
            </div>
            <div className="text-center flex flex-wrap w-full md:w-[700px] leading-7">
              Hi, I’m Myo Min Htun, a professional trainer with 4 years of
              experience in achieving amazing body transformations. Ready to
              transform your body and reach your fitness goals?
            </div>
            <div>
              <Button size="lg" variant="destructive" className="uppercase">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
