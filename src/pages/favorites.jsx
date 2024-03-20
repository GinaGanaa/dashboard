import { Favorites } from "@/components/favorites/Favorites";
import { favorites } from "@/utils/constants";

export default function Page() {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((card) => {
        <Favorites card={card} />;
      })}
    </div>
  );
}
