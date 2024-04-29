import PageWrapper from "@/components/shared/page-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-full relative flex justify-center gap-y-4  flex-col px-8 text-white z-[2]"
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
            className="text-gray-300  text-6xl font-bold font-ato uppercase"
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
