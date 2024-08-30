import { useSelector } from "react-redux"
import RestaurantMenuItemList from "./RestaurantMenuItemList"

const Cart = () => {
  
  const itemCart = useSelector((res) => res.cart.items)
  
  return (
    <div>
      <h1>Cart</h1>
      <section>

      </section>
      <RestaurantMenuItemList items={itemCart} />
    </div>
  )
}

export default Cart;