import { MdStars } from "react-icons/md";
import { RESTAURANTS_IMAGE_URL } from "../utils/Links";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { RestaurantMenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {

  const {resId} = useParams()

  const restaurantMenu = useRestaurantMenu(resId)

  const {
    avgRating,
    name,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
    sla,
    areaName,
    city,
  } = restaurantMenu?.cards[2]?.card?.card?.info || [];

  const menuList = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items) => items?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
  console.log(menuList);
  

  if (restaurantMenu === null) {
    return <RestaurantMenuShimmer />;
  }

  return (
    <div className="mt-16">
      <div className="flex text-center m-auto p-2 rounded-[20px] h-[12rem] gap-10 w-[49rem] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.4)] items-center overflow-hidden">
        <section>
          <img
            className="h-[11rem] w-[18rem] p-1 object-cover rounded-2xl hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src={RESTAURANTS_IMAGE_URL + cloudinaryImageId} alt="" />
        </section>

        <section>
          <div className="text-start">
            <div className="grid justify-start">
              <h1 className="font-extrabold text-[30px]">{name}</h1>
              <div className="flex items-center font-bold text-lg">
                <MdStars
                  className="text-white w-[20px] h-[20px] rounded-[100%] p-[1px] mr-[5px]" 
                  style={avgRating >= 4.0 ? {backgroundColor: "green"} : {backgroundColor: "red"}}
                />
                <p className="">{avgRating}</p>
                <p className="mx-2">({totalRatingsString})</p>
              </div>
            </div>
            <div className="text-[17px]">
              <p className="text-[#696969] text-start">{cuisines?.join(", ")}</p>
              <p className="text-[#9C9C9C]">{areaName}<span>, </span><span>{city}</span></p>
            </div>
          </div>
        </section>
      </div>

      <div className="m-10">
        {menuList.map((dishes) => (
          <RestaurantMenuCategory key={dishes?.card?.card?.title} data={dishes?.card?.card} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu;