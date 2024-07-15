import { FC } from "react";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Service from "./service";

const HomeContainer: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  );
};

export default HomeContainer;
