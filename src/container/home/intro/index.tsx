import Header from "@/components/shared/header";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="container py-6 space-y-6">
        <Header>Star Fitness တွင် Personal Training Plan ယူခြင်း</Header>
        <p className="text-center w-[80%] mx-auto">
          Star Fitness မှာ Personal training programme များဖြင့်
          သင့်ရဲ့ခန္ဓာကိုယ်ကို ပြောင်းလဲစေပါ။ ကျွန်တော်တို့ရဲ့
          ပရော်ဖက်ရှင်နယ်လေ့ကျင့်သူများက သင့်ရဲ့ ရည်မှန်းချက်နှင့်
          လိုအပ်ချက်များအရ အကောင်းဆုံးသော လေ့ကျင့်ခန်းအစီအစဉ်ကို အတူတူ
          လေ့ကျင့်ပေးပါမည်။
        </p>
        <p className="text-center w-[80%] mx-auto">
          သင့်ရဲ့ တိုးတက်မှုကို စစ်ဆေးပြီး အကောင်းဆုံးရလဒ်တွေကို ရယူနိုင်ဖို့
          အစဉ်အမြဲ လေ့ကျင့်ခန်းများကို ပြောင်းလဲပေးပါမည်။
        </p>
        <div className="gap-6 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[300px]  h-[300px] md:h-[500px] relative">
            <Image
              src="/images/p3.png"
              fill
              className="object-contain rounded-3xl"
              alt="p3"
            />
          </div>
          <div className="w-full md:mt-[200px] md:w-[300px] h-[300px] md:h-[500px] relative">
            <Image
              src="/images/p4.png"
              fill
              className="object-contain rounded-3xl"
              alt="p3"
            />
          </div>
          <div className="w-full md:w-[300px] h-[300px] md:h-[500px] relative">
            <Image
              src="/images/p8.png"
              fill
              className="object-contain rounded-3xl"
              alt="p3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
