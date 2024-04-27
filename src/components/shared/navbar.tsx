import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full absolute top-0 z-[9]">
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
      <div className=" flex-1 justify-center hidden  md:flex">
        <Input
          className="w-[300px] bg-[#db232f] p-3 rounded-full placeholder:text-white h-30 text-white"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
