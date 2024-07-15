import { ChevronsRight } from "lucide-react";
const Service = () => {
  return (
    <div>
      <div className="h-screen">
        <h2 className="w-full py-6 text-primary uppercase font-semibold  text-center text-3xl md:text-4xl">
          Our services
        </h2>
        <div className=" flex flex-col h-full md:flex-row z-5">
          <div className="w-full h-full md:basis-2/5 container  flex flex-col flex-y-6 justify-center items-center  md:items-start p-6 ">
            <div className="text-3xl w-full text-center   md:text-start  md:text-5xl uppercase font-bold">
              Shape Your
            </div>
            <div className="text-4xl text-center md:text-start   w-full uppercase md:text-7xl font-bold text-primary">
              BODY
            </div>
            <div className="mt-6 border-b-2 border-b-white   text-3xl font-semibold text-primary uppercase ">
              Our Services
            </div>
            <div className="flex flex-col gap-y-2 mt-[3rem]">
              <div className="flex gap-x-2  items-center">
                <ChevronsRight className="text-primary w-10 h-10" />
                <h2 className="text-xl">One On One Coaching</h2>
              </div>
              <div className="flex gap-x-2  items-center">
                <ChevronsRight className="text-primary w-10 h-10" />
                <h2 className="text-xl">Online Coaching</h2>
              </div>
              <div className="flex gap-x-2  items-center">
                <ChevronsRight className="text-primary w-10 h-10" />
                <h2 className="text-xl">Home Coaching</h2>
              </div>
            </div>
          </div>
          <div
            className="basis-3/5 h-full hidden md:block container bg-primary"
            style={{
              clipPath: "polygon(30% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            Image
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
