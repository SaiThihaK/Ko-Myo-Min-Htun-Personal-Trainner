import Header from "@/components/shared/header";
import { DumbbellIcon } from "lucide-react";

const Service = () => {
  return (
    <>
      <div className="container py-6 gap-6   md:py-[4rem]">
        <Header>How Can I Help You</Header>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div>
            <div className="w-full md:w-[500px] group cursor-pointer rounded-2xl  bg-service1 bg-cover bg-no-repeat bg-center aspect-square relative">
              <div className="w-full h-full flex justify-start items-end px-2">
                <Header className="text-white  flex-nowrap mb-8 group-hover:bg-primary transition-all duration-500 ease-in-out  bg-black text-center rounded-full">
                  <div className="w-full flex  group-hover:gap-x-4 transition-all duration-500 ease-in-out  gap-x-2 items-center justify-center">
                    <DumbbellIcon className="w-8 h-8 md:w-10 md:h-10" />
                    <div>Online Coaching</div>
                  </div>
                </Header>
              </div>
            </div>
            <Header>100K MMK</Header>
          </div>
          <div>
            <div className="w-full  mx-auto md:mx-0 md:w-[500px] group cursor-pointer rounded-2xl  bg-service2 bg-cover bg-no-repeat bg-center aspect-square relative">
              <div className="w-full h-full flex justify-start items-end px-2">
                <Header className="text-white mb-8 group-hover:bg-primary transition-all duration-500 ease-in-out  bg-black text-center rounded-full">
                  <div className="w-full flex group-hover:gap-x-4 transition-all duration-500 ease-in-out  gap-x-2 items-center justify-center">
                    <DumbbellIcon className="w-8 h-8 md:w-10 md:h-10" />
                    <div>In-person coaching</div>
                  </div>
                </Header>
              </div>
            </div>
            <Header>300K MMK</Header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
