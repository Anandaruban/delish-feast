import { useState } from "react";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const RestaurantMenuCategory = ({data}) => {

  const [toggleItems, setToggleItems] = useState(false)

  const itemToggle = () => setToggleItems(!toggleItems)

  return (
    <div className="text-center m-auto w-[49rem] p-4 mt-4 rounded-lg hover:shadow-[1px_2px_9px_0px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between cursor-pointer items-center py-2" onClick={itemToggle}>
        <div className="flex gap-1 items-center font-bold text-lg font-resTitle">
          <h1 className="font-bold text-lg">{data?.title}</h1>
          <h1>({data.itemCards.length})</h1>
        </div>
        {toggleItems === true ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div>
        {toggleItems && <RestaurantMenuItemList items={data?.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantMenuCategory;