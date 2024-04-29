"use client";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import Menubar from "./menu-bar";

type Props = {};

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="flex relative justify-between items-center w-full bg-black p-3">
      <Image src="/ferrari.jpeg" alt="car logo" width={100} height={100} />

      <Menubar />
    </div>
  );
};

export default Navbar;
