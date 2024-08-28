// The Cart page has to display the food items to buy which is there in the store/slice
//To get the data from store, Cart page has to  subscribe to the store

import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList"

const Cart = () => {
 
    const dispatchEvent = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
     dispatchEvent(clearCart());
 }
    return(
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className=" p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems?.length === 0 && (
            <h1> Cart is empty. Add Items to the cart!</h1>
          )}
          <ItemList items={cartItems} />
        </div>
      </div>
    );
}

export default Cart;