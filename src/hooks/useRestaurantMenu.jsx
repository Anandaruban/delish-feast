import { useState, useEffect } from "react"
import { RESTAURANTS_MENU_URL } from "../utils/Links"


const useRestaurantMenu = (resId) => {

  const [restaurantMenu, setRestaurantMenu] = useState(null)

  const fetchMenu = async () => {
    try {
      const data = await fetch(RESTAURANTS_MENU_URL + resId)
      const obj = await data.json()
      console.log(obj);
      setRestaurantMenu(obj?.data)
    }
    catch (error) {
      console.error("Failed to fetch", error);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, [])

  return restaurantMenu
}

export default useRestaurantMenu;