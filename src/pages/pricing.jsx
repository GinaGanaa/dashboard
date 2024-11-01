import { pricing } from "@/utils/pricing/pricing";
import { Pricing } from "@/components/pricing/Pricing";

export default function Page() {
  return (
    <div className="p-[32px]">
      <h2 className="text-[32px] pb-[31px] font-medium">Pricing</h2>
      <div className="flex gap-[40px]">
        {pricing.map((pricing) => (
          <Pricing pricing={pricing} />
        ))}
        ,
      </div>
    </div>
  );
}
