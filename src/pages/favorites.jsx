import { Favorites } from "@/components/favorites/Favorites";
import { favorites } from "@/utils/constants";

export default function Page() {
  return (
    <div className="p-[30px]">
      <h2 className="text-[32px] font-medium pb-[23px]">Favorites</h2>
      <div className="flex gap-[30px] flex-wrap">
        {favorites.map((card) => (
          <Favorites card={card} />
        ))}
      </div>
    </div>
  );
}
