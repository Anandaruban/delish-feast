import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { clearCart } from "../redux/cartSlice";
import { EMPTY_CART_IMAGE } from "../utils/Links";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const clear = () => dispatch(clearCart())

  return (
    <div className="w-[100%] h-[calc(100vh - 80px)] flex flex-col text-center items-center justify-center font-resTitle">
      <h1 className="w-full text-center text-2xl font-bold border-b-2 mb-[30px]">
        Cart
      </h1>
      

      {cartItems.length > 1 && 
        <button
        className="py-[3px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-[8px] border-none hover:bg-[#016034]"
        onClick={() => clear()}
      >
        Clear Cart
      </button>
      }


      <div className="w-[17rem] h-[28rem] items-center mt-[1rem]">
        {
          cartItems.length === 0 && (
            <div className="w-[17rem] flex flex-col h-[1rem]">
              <img src={EMPTY_CART_IMAGE} alt="empty-cart" className="w-[30rem] h-[30rem]" />
              <div className="text-center flex flex-col mt-3 text-2xl font-bold">
              <span>Your cart is empty!</span>
              <span>Add items to your cart.</span>
              <Link to={"/"}><button className="bg-[#386641] m-auto w-[16rem] p-4 font-button text-xl text-white rounded-md font-semibold cursor-pointer text-center hover:bg-[#6a994e] transition-all" >Return to Restaurant</button></Link>
            </div> 
            </div>
          )
        }
        <RestaurantMenuItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;