import { pricing } from "@/utils/pricing/pricing";
import { Pricing } from "@/components/pricing/Pricing";

export default function Page() {
  return (
    <div className="p-[32px]">
      <h2 className="text-[32px] pb-[31px] font-medium">Pricing</h2>
      <div className="flex gap-[40px]">
        {pricing.map((plan) => (
          <div>
            <Pricing plan={plan} />
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  {Object.values(feature)[0]}
                  {feature.available ? "Available" : "Not Available"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
