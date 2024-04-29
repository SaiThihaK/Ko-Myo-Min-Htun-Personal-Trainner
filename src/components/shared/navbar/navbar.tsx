"use client";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import Menubar from "./menu-bar";

type Props = {};

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="flex relative justify-end container items-center w-full bg-transparent py-3">
      {/* <Image src="/ferrari.jpeg" alt="car logo" width={100} height={100} /> */}
      <Menubar />
    </div>
  );
};

export default Navbar;
