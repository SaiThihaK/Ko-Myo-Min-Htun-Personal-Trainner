import Header from "@/components/shared/header";
import Image from "next/image";
import FaqAccordion from "./faq-accordion";

const Faq = () => {
  return (
    <>
      <div className="container py-6">
        <Header>မေးခွန်းများ</Header>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex basis-1/2  w-full gap-4">
            <div className="basis-1/2 mt-[100px] h-[400px] w-full relative">
              <Image
                src="/images/p5.png"
                fill
                alt="Myo Min Htun"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="basis-1/2  h-[400px] w-full relative">
              <Image
                src="/images/p7.png"
                fill
                alt="Myo Min Htun"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
