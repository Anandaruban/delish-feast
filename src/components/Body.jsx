import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../hooks/useRestaurantData";
import { RestaurantShimmer } from "./Shimmer";

const Body = () => {

  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantsData, filterRestaurantsData, setFilterRestaurantsData] = useRestaurantData();
  
  const updateValue = (e) => setSearchRestaurant(e.target.value);

  const findRestaurants = () => {
    setFilterRestaurantsData(restaurantsData.filter((res) => res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())))
    setSearchRestaurant("");
  }

  const topRatedRestaurants = () => setFilterRestaurantsData(restaurantsData.filter((r) => r.info.avgRating >= 4.3))

  const reset = () => {
    setFilterRestaurantsData(restaurantsData)
  }

  {return restaurantsData.length === 0 ? <RestaurantShimmer /> : (
    <div>
      <div className="h-[1500px]">
        <div className="p-4 m-4 flex ml-[24%]">
          <input type="text" placeholder="Search for restaurants" onChange={updateValue} value={searchRestaurant}
          className="border-2 px-3 w-[30%] rounded-l-md relative font-normal text-lg outline-none focus:border-[#c37d92]"
          />
          <button
          onClick={findRestaurants}
            className="text-xl bg-[#c37d92] cursor-pointer pr-5 pl-5 rounded-r-md font-semibold content-center text-white hover:bg-[#d89a9e] transition-all"
            >
            Search
          </button>
          
          <button
          onClick={topRatedRestaurants}
            className="text-xl bg-[#c37d92] cursor-pointer p-3 ml-4 font-semibold rounded-md content-center text-white hover:bg-[#d89a9e] transition-all"
          >
            Top Rated Restaurant
          </button>
          <div className="flex items-center">
            <button className="bg-[#3E78B2] text-white p-3 px-4 font-semibold rounded-md mx-3 hover:bg-[#6b9080] transition-all" onClick={reset}>RESET</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mx-[15.4rem]">
          {filterRestaurantsData.map((res) => (
              <RestaurantCard key={res.info.id} data={res} />
            ))}
        </div>
      </div>
    </div>
  )}
}

export default Body;