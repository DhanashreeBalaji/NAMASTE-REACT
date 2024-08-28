import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items,dummy}) => {
   // console.log(dummy)
   // console.log(items)

   const dispatch = useDispatch();


   // Dispatch an action (Import the action from the reducer of the slice)
   // While dispatching the action if any data needs to be send, do it also here
   // The data send will be in a object and key is payload.
   // {
   //    payload: item
   // }  = action 
   const handleAddItem = (item) => {
      console.log("About to dispatch")
      dispatch(addItem(item));
      console.log("dispatched")
  }

   return(
      <div>
           {
            items.map((item) => (
               
               <div key = {item.card.info.id} 
               className="p-2 m-2 border-gray-200 border-b-2 flex justify-between text-left"
               data-testid = "foodItems"
                >
                     <div className="w-9/12 ">
                     <div className="py-2 font-bold text-gray-600">
                  <span>{item.card.info.name}</span>
                  <span>
                  { } -  Rs
                  {item.card.info.price
                    ? item.card.info.price/100
                    : item.card.info.defaultPrice / 100 
                  }
                  </span>
                   </div>
                <p className="text-xs text-gray-400"> {item.card.info.description} </p>   
                     </div>

                     {/* Image Div */}
                 <div className="w-3/12 p-4">
                {/* Add Button over image */}
                 <div className="absolute ">
                 <button 
                 className="p-2 mx-20 bg-black text-white shadow-lg rounded-lg "
                 onClick={() => handleAddItem(item)}
                 >
                  Add +
                 </button>
                 </div>
                <img src= {CDN_URL + item.card.info.imageId} className="w-full rounded-md "/>
                 </div>

                 </div>
            ))
           }
      </div>
   )
   
}

export default ItemList;