import { WatchSeries } from "@/components/products/WatchSeries";
import { FreeDelivery } from "@/components/products/FreeDelivery";

export default function Page() {
  return (
    <div className="p-[30px] flex flex-col gap-[30px]">
      <FreeDelivery />
      <div className="flex gap-[28px]">
        <WatchSeries />
        <WatchSeries />
        <WatchSeries />
      </div>
    </div>
  );
}
