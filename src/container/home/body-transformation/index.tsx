import Header from "@/components/shared/header";
import Image from "next/image";
import { FC } from "react";

const BodyTransformation: FC = () => {
  return (
    <>
      <div className="container w-full py-6">
        <Header>Body Transformations</Header>
        <div className="w-full h-full flex overflow-y-scroll no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="w-full md:w-[350px]  h-[300px] flex-shrink-0 relative"
            >
              <Image
                src={"/images/p9.jpg"}
                fill
                className="object-contain"
                alt="body transformation"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyTransformation;
