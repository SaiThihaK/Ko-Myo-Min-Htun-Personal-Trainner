import Header from "@/components/shared/header";
import Image from "next/image";
import { FC } from "react";
const BodyTransformation: FC = () => {
  return (
    <>
      <div className="container w-full py-6">
        <Header>Body Transformations</Header>

        <div className="w-full h-full gap-x-4 flex overflow-y-scroll no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="bg-slate-900 shadow-md rounded-md w-full"
            >
              <div className="flex">
                <div className="relative w-[150px] md:w-[400px] m-auto h-[350px] md:h-[600px]  flex-shrink-0   border-b-4 border-b-primary">
                  <Image
                    src={"/images/p1.jpg"}
                    fill
                    className="object-contain"
                    alt="body transformation"
                  />
                </div>
                <div className="relative w-[150px] md:w-[400px] m-auto h-[350px] md:h-[600px] flex-shrink-0    border-b-4 border-b-primary">
                  <Image
                    src={"/images/p9.jpg"}
                    fill
                    className="object-contain"
                    alt="body transformation"
                  />
                </div>
              </div>

              <div className="w-full p-2">
                <h3>Aung Myo Min</h3>
                <h3>3months</h3>
                <h3>age-30s</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyTransformation;
