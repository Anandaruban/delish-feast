import { RESTAURANTS_DATA_URL } from "../utils/Links";
import { useState, useEffect } from "react";
import { CORS_PROXY_URL } from "../utils/Links";

const useRestaurantData = () => {
  
  const [restaurantsData, setRestaurantsData] = useState([])
  const [filterRestaurantsData, setFilterRestaurantsData] = useState([])

  const fetchData = async () => {
      
    try {
      const data = await fetch(CORS_PROXY_URL + RESTAURANTS_DATA_URL)
      const jsonObject = await data.json()
      setRestaurantsData(jsonObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterRestaurantsData(jsonObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch (error) {
      console.error("Failed to fetch APIs", error);
    }
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [restaurantsData, filterRestaurantsData, setFilterRestaurantsData]
}

export default useRestaurantData;