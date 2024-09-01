import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../hooks/useRestaurantData";
import { RestaurantShimmer } from "./Shimmer";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Body = () => {  

  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantsData, filterRestaurantsData, setFilterRestaurantsData] = useRestaurantData();

  const [updateData, setUpdateData] = useState("");
  
  const updateValue = (e) => setSearchRestaurant(e.target.value);

  const findRestaurants = () => {
    setFilterRestaurantsData(restaurantsData.filter((res) => res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())))
    setSearchRestaurant("");
  }

  const topRatedRestaurants = () => setFilterRestaurantsData(restaurantsData.filter((r) => r.info.avgRating >= 4.3))

  const reset = () => {
    setFilterRestaurantsData(restaurantsData)
  }

  const update = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update")
    const result = await data.json()
    console.log(result);
  }

  useEffect(() => {
    update();
  }, [])

  {return restaurantsData.length === 0 ? <RestaurantShimmer /> : (
    <div>
      <div className="">
        <div className="p-4 m-4 flex ml-[24%]">
          <input type="text" placeholder="Search for restaurants" onChange={updateValue} value={searchRestaurant}
          className="border-2 px-3 w-[30%] rounded-l-md relative font-normal text-lg outline-none focus:border-[#c37d92]"
          />
          <button
          onClick={findRestaurants}
            className="text-xl bg-[#c37d92] cursor-pointer pr-5 pl-5 rounded-r-md font-semibold content-center text-white hover:bg-[#d89a9e] transition-all"
            >
            <TfiSearch />
          </button>
          
          <button
          onClick={topRatedRestaurants}
            className="bg-[#c37d92] cursor-pointer p-3 ml-4 font-semibold rounded-md content-center text-white font-searchBtn hover:bg-[#d89a9e] transition-all"
          >
            Top Rated Restaurant
          </button>
          <div className="flex items-center">
            <button className="bg-[#3E78B2] text-white p-3 px-4 font-semibold rounded-md mx-3 font-searchBtn hover:bg-[#6b9080] transition-all" onClick={reset}>RESET</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mx-[15.4rem]">
          {filterRestaurantsData.map((res) => (
              <Link key={res.info.id} to={/restaurants/ + res.info.id}>
                <RestaurantCard data={res} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )}
}

export default Body;