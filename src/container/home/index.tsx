import { FC } from "react";
import About from "./about";
import Hero from "./hero";
import Service from "./service";

const HomeContainer: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
    </>
  );
};

export default HomeContainer;
