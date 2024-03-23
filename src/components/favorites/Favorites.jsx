import { ColoredStar } from "../products/ColoredStar";
import { Star } from "../products/Star";

export const Favorites = ({ card }) => {
  const { productName, price, imgUrl, rating, isFavorated } = card;
  return (
    <div className="w-[361px] h-[497px] bg-white rounded-[14px]">
      <div className="relative">
        <div className="flex absolute w-full h-full justify-between p-[14px]">
          <img src="./products/leftArrow.svg" width={41} />
          <img src="./products/rightArrow.svg" width={41} />
        </div>
        <img className="rounded-[14px]" src={imgUrl} />
      </div>
      <div className="p-[24px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[18px]"> {productName}</p>
            <p className="text-[#4880FF] pb-[10px] pt-[8px]"> ${price}</p>
          </div>
          {isFavorated ? (
            <img src={"/favorites/coloredHeart.svg"} />
          ) : (
            <img src={"/favorites/heartIcon.svg"} />
          )}
        </div>
        <div className="flex pb-[20px]">
          {[1, 2, 3, 4, 5].map((num) => {
            return num <= rating ? <ColoredStar /> : <Star />;
          })}
        </div>
        <button className="text-[14px] w-[126px] h-[38px] bg-[#E2EAF8] rounded-[12px]">
          Edit Product
        </button>
      </div>
    </div>
  );
};
