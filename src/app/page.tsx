import PageWrapper from "@/components/shared/page-wrapper";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <PageWrapper>
      <div className="w-full h-full flex  justify-start items-center z-4">
        <div className="flex flex-col gap-y-4">
          <div className="text-3xl md:text-6xl font-bold tracking-widest font-work  text-start text-red-600">
            GEAR
          </div>
          <div
            className="text-5xl md:text-9xl font-work font-bold tracking-widest"
            style={{
              backgroundImage: `url(/wheel.jpeg)`,
              color: "transparent",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            CYCLE
          </div>
          <div className="text-start flex flex-wrap w-full md:w-[450px] font-work">
            Join our vibrant community of cycling enthusiasts! Whether you're a
            seasoned rider or just starting out, our community is the perfect
            place to share your passion for cycling. Connect with fellow
            cyclists, exchange tips, participate in discussions, and stay
            updated on the latest cycling events and news.
          </div>
          <div className="">
            <Button variant="destructive">BOOK AN ORDER</Button>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block w-full h-screen absolute top-0 bg-red-600 opacity-35 z-1"
        style={{ clipPath: " polygon(73% 0, 100% 0, 84% 100%, 56% 100%)" }}
      />
      <div className="w-full h-full absolute top-0 flex justify-center items-center z-1"></div>
    </PageWrapper>
  );
};

export default HomePage;
