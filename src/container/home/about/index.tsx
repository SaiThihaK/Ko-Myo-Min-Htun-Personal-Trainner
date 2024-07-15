import Header from "@/components/shared/header";
import Wrapper from "@/components/wrapper";

const About = () => {
  return (
    <div className="bg-white text-black bg-fixed">
      <Wrapper>
        <Header>Strength Coaching</Header>
        <div className="flex flex-col w-full gap-6 mt-6 h-full ">
          <div className="h-full gap-4 md:gap-[2rem] flex flex-col md:flex-row">
            <div>
              How much have you spent trying to improve your health and fitness
              over the years only for the supplements to go in the bin, the home
              workout equipment to go in the cupboard or the gym memberships
              running unused? Have you ever calculated how much money has gone
              to waste to date? At Strength Coach Glasgow, we work on actually
              getting your return on investment, you are paying for the result
              and we’ll make sure we deliver.
            </div>
            <div>
              ​Our training programmes are designed not only to help you learn
              correct exercise form, but also to help you improve your strength,
              lose weight if needed and create a quality of life you can enjoy.
              This way your confidence will soar, your body will feel and look
              amazing and there won't be anything you can't achieve with
              dedication and commitment..
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2rem] gap-6 justify-center md:flex-row">
          <div className=" w-full md:w-[250px] aspect-square bg-primary"></div>
          <div className=" w-full md:w-[250px] aspect-square bg-primary"></div>
          <div className=" w-full md:w-[250px] aspect-square bg-primary"></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
