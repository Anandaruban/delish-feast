import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { RESTAURANTS_DISHES_MENU_URL } from "../utils/Links";
import { useDispatch,useSelector } from "react-redux";
// import { FiPlus } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";
import { addItems, removeItems } from "../redux/cartSlice";

const RestaurantMenuItemList = ({items}) => {

  const dispatch = useDispatch()

  const addCartItems = (item) => {
    dispatch(addItems(item))
  }

  // const removeCartItems = (item) => {
  //   dispatch(removeItems(item))
  // }

  // const cartLength = useSelector((list) => list.cart.items)

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, ratings, imageId, description } =
        item.card.info;

        return (
          <section
        className="flex p-1 m-2 text-left border-b-2 justify-between h-[12rem] w-[48rem] items-start" 
        key={id}>

          <div className="">
            <div className="py-2 w-[25rem] font-resTitle">
              <span className="text-[#02060cbf] font-bold text-lg">{name}</span>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee className="text-[#02060ceb] font-normal text-base" />
                <span className="font-normal text-base text-[#02060ceb]">{price / 100 || defaultPrice / 100}</span>
              </div>
              <div className="flex items-center">
                <GoStarFill style={ratings?.aggregatedRating?.rating >= 4.0 ? {color: "#116649"} : {color: "#E6A408"}} />
                <span className="mr-1" style={ratings?.aggregatedRating?.rating >= 4.0 ? {color: "#116649"} : {color: "#E6A408"}}>{ratings?.aggregatedRating?.rating}</span>
                <span>({ratings?.aggregatedRating?.ratingCountV2})</span>
              </div>
              <p className="w-[34rem] h-[38px] font-normal text-[#02060c99] truncate text-base  ">{description}</p>
            </div>
          </div>
          <div className="w-fit px-4 h-36 font-resTitle">
            <img 
            className="h-36 w-[156px] rounded-xl"
            src={RESTAURANTS_DISHES_MENU_URL + imageId} alt="" />
            <div className="relative items-center left-[12%] bottom-7">
            <button
              onClick={() => addCartItems(item)}
              className="text-center shadow-[0px_3px_8px_rgba(40,44,63,.8)] h-10 rounded-[8px] bg-white text-[#1BA672] font-extrabold text-lg w-[120px] hover:bg-slate-200 transition-all">ADD</button>
            {/* {cartLength.length > 0 ?
            <div className="flex justify-evenly text-center items-center shadow-[0px_3px_8px_rgba(40,44,63,.8)] h-10 rounded-[8px] bg-white text-[#1BA672] font-extrabold text-lg w-[120px]">
              <FiMinus className="cursor-pointer" onClick={() => removeCartItems(item)} />
              <span className="border-x w-[40%] hover:bg-white">{cartLength.length}</span>
              <FiPlus className="cursor-pointer" onClick={() => addCartItems(item)}  />
            </div> : 
            } */}
            </div>
          </div>
        </section>
        )
        })}
    </div>
  )
}

export default RestaurantMenuItemList;

