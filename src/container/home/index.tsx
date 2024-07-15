import { FC } from "react";
import Contact from "./contact";
import Hero from "./hero";
import Service from "./service";

const HomeContainer: FC = () => {
  return (
    <>
      <Hero />
      <Service />
      <Contact />
    </>
  );
};

export default HomeContainer;
