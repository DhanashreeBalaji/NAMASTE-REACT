import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const styleCard = {
    backgroundColor : "#f0f0f0"
}

const RestaurantCard = (props) => {

    const {loggedInUser,Country} = useContext(UserContext);
   const {resData} = props;
   const {
      name,
      avgRating,
      deliveryTime,
      cuisines,
      costForTwo,
      cloudinaryImageId,
   } = resData;

   // Creating Restaurant card
    return(
        
        <div 
         data-testid ="resCard"
         className="m-4 p-4 w-[200px] rounded-lg  bg-gray-100 hover:bg-gray-200"  
        //  style={styleCard}       
         >
        <img 
        className = "rounded-lg "
        alt = "res-logo"  
        src = {CDN_URL + cloudinaryImageId}

        />
         <h3 className="font-bold py-2 text-lg ">{name}</h3>
         <h4>{cuisines}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{deliveryTime}</h4>
         <h4>{costForTwo} </h4>
         <h4>{loggedInUser+ " "+ Country}</h4>
        </div>
    )
};

//Higher Order component
//input - RestaurantCard  => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md"> Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};

export default RestaurantCard;