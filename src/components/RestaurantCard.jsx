import { RESTAURANTS_IMAGE_URL } from "../utils/Links";
import { MdStars } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const RestaurantCard = ({data}) => {

  const {avgRating, name, sla, cuisines, areaName, cloudinaryImageId, id} = data.info;

  return (
    <Link to={"/restaurants/" + id}>
      <div className="cursor-pointer w-[20rem] leading-4 gap-[10px] grid grid-flow-row justify-stretch ">
        <div className="h-[21.5rem] hover:shadow-[2px_4px_9px_rgba(0,0,0,.3)] rounded-xl transition-all">
          <div>
            <img
              src={RESTAURANTS_IMAGE_URL + cloudinaryImageId} 
              alt="dfgfsg" 
              className="w-[20rem] p-2 h-[15rem] box-border rounded-2xl object-cover"
            />
          </div>
          
          <div className="bg-[#fff] px-4 h-20">
            <h1 className="text-lg font-medium overflow-hidden truncate w-[14rem] h-[26px] text-[#1C1C1C] font-resTitle">{name}</h1>
            <div className="text-base font-normal text-[#363636] flex items-center h-[22px]">
              <MdStars
                className="text-white w-[20px] h-[20px] rounded-[100%] p-[1px] mr-[5px]" 
                style={avgRating >= 4.0 ? {backgroundColor: "green"} : {backgroundColor: "red"}}
              />
              <span className="font-resTitle">{avgRating}</span>
              <RxDotFilled className="mx-[1px]" />
              <span className="font-resTitle">{sla?.slaString}</span>
            </div>
            <div className="font-resTitle grid gap-x-[2px] mt-[2px] font-light text-[#696969] text-base w-[15rem]">
              <p className="truncate h-5">{cuisines.join(", ")}</p>
              <p className="h-5">{areaName}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard;