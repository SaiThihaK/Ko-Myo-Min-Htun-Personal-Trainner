import Header from "@/components/shared/header";
import Wrapper from "@/components/wrapper";
import { ArrowDownRight } from "lucide-react";

const socialMedia: { link: string; name: string }[] = [
  { link: "", name: "Instagram" },
  { link: "", name: "Facebook" },
  { link: "", name: "Telegram" },
  { link: "", name: "Titktok" },
];

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Header>Follow me on social media</Header>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="w-[80%] rounded-xl md:basis-1/2 aspect-square mx-auto bg-contact bg-cover bg-no-repeat bg-center"></div>
          <div className="w-full md:basis-1/2">
            {socialMedia.map((el, index) => (
              <div
                className="border-b-2 group hover:border-b-primary border-gray-600 w-[80%] mx-auto"
                key={index}
              >
                <Header className="text-start flex w-full justify-between items-center text-white">
                  <div className="group-hover:text-primary">{el.name}</div>
                  <ArrowDownRight className="w-12 h-12 group-hover:w-14 group-hover-h-14 group-hover:text-primary transition-all group-hover:translate-x-5 duration-500" />
                </Header>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
