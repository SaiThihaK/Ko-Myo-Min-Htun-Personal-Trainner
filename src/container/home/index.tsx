import { FC } from "react";
import Contact from "./contact";
import Faq from "./faq";
import Hero from "./hero";
import Intro from "./intro";
import Service from "./service";

const HomeContainer: FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Faq />
      <Service />
      <Contact />
    </>
  );
};

export default HomeContainer;
