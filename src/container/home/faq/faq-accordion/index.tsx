import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";

const FaqAccordion: FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-primary">
          Star Fitness ကဘယ်အချိန်တွေဖွင့်တာလဲ?
        </AccordionTrigger>
        <AccordionContent>
          Star Fitness သည် တနင်္လာမှ သောကြာနေ့အထိ နံနက် ၆ နာရီမှ ည ၁၀ နာရီအထိ
          ဖွင့်လှစ်ပြီး စနေ၊ တနင်္ဂနွေတို့တွင် နံနက် ၈ နာရီမှ ည ၈ နာရီအထိ
          ဖွင့်လှစ်ပါသည်။
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-primary">
          Personal Trainingအတွက် ကြိုတင်ချိန်းရန် လိုအပ်ပါသလား
        </AccordionTrigger>
        <AccordionContent>
          ဟုတ်ကဲ့၊ Personal အချိန်စာရင်းကို စီစဉ်ရန်နှင့်
          သင့်ရဲ့လိုအပ်ချက်များကို ပြည့်စုံစေရန် ကြိုတင်ချိန်းစည်းရန်
          လိုအပ်ပါသည်။
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-primary">
          အချိန်ဘယ်လောက်ဆော့ရင် Body Transformation ဖြစ်မှာလဲ
        </AccordionTrigger>
        <AccordionContent>
          ဆော့တဲ့သူရဲ့ ဆော့နိုင်အား ကိုယ်အလေးချိန်အရပ်ပေါ်မူတည်ပီး body
          ပြောင်းလဲချိန်ကကွာခြားသွားမှာဖြစ်ပါတယ်
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-primary">
          အချိန်ဘယ်လောက်ဆော့ရင် Body Transformation ဖြစ်မှာလဲ
        </AccordionTrigger>
        <AccordionContent>
          ဆော့တဲ့သူရဲ့ ဆော့နိုင်အား ကိုယ်အလေးချိန်အရပ်ပေါ်မူတည်ပီး body
          ပြောင်းလဲချိန်ကကွာခြားသွားမှာဖြစ်ပါတယ်
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-primary">
          အချိန်ဘယ်လောက်ဆော့ရင် Body Transformation ဖြစ်မှာလဲ
        </AccordionTrigger>
        <AccordionContent>
          ဆော့တဲ့သူရဲ့ ဆော့နိုင်အား ကိုယ်အလေးချိန်အရပ်ပေါ်မူတည်ပီး body
          ပြောင်းလဲချိန်ကကွာခြားသွားမှာဖြစ်ပါတယ်
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
