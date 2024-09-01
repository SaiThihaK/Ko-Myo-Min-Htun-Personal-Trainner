"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="container w-full min-h-screen bg-fixed bg-hero bg-cover bg-no-repeat bg-center">
        <div className="w-full h-screen  z-[4]">
          <div className="flex w-full h-full flex-col space-y-2 justify-center items-center gap-y-2">
            <div className="text-4xl w-full text-primary text-center  md:text-6xl font-black tracking-wide ">
              ပရော်ဖက်ရှင်နယ်နဲ့ အတူ လေ့ကျင့်ပါ
            </div>
            <div className="text-center flex flex-wrap w-full md:w-[700px] leading-7">
              မင်္ဂလာပါ၊ ကျွန်တော်က ၄ နှစ်ကြာ လုပ်ငန်းအတွေ့အကြုံရှိတဲ့
              ပရော်ဖက်ရှင်နယ် ကစားသမား မျိုးမင်းထွန်း ဖြစ်ပါတယ်။ သင့်ရဲ့
              ခန္ဓာကိုယ် ပြောင်းလဲမှုကို ရောက်အောင်၊ fitness ရည်မှန်းချက်တွေကို
              ပြည့်မီအောင် လုပ်ချင်ပါသလား?
            </div>
            <div>
              <Button size="lg" variant="destructive" className="uppercase">
                ဒီနေ့ပဲစတင်လိုက်ပါ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
