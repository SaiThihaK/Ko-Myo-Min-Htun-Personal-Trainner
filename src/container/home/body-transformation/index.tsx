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
            <div key={index} className="bg-slate-900 space-y-2">
              <div className="w-full md:w-[600px] relative aspect-square flex   border-b-4 border-b-primary">
                <Image
                  src={"/images/p9.jpg"}
                  fill
                  className="object-contain"
                  alt="body transformation"
                />
              </div>
              <div className="w-full p-2">
                <p>Aung Myo Min</p>
                <p>3months</p>
                <p>age:30s</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyTransformation;
