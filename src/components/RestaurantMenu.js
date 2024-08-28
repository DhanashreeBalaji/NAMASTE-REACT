
import { useParams  } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

const {resId} = useParams();
 const menudetails = useRestaurantMenu(resId);

 const [showIndex, setShowIndex] = useState(null);

const dummy = "Dummy data for Prop Drilling"

// ---------KEPT IN CUSTOM HOOK-----------------------

// const[menudetails, setMenuDetails] = useState(null);

// useEffect( () => {
//     fetchResMenuAPI();
// }, []);

//   const fetchResMenuAPI = async () => {
//       const data = await fetch (MENU_URL + resId);
//       const json = await data.json();
//       console.log(json); 
//      setMenuDetails(json.data);
//   }; 
//  ---------------KEPT IN CUSTOM HOOK----------------------


   if(menudetails === null)
   return <Shimmer/> ;

     // --------------------------- DESTRUCTURING FROM API DATA ------------------------------- //
   const{name,cuisines,costForTwoMessage} = menudetails?.cards[2]?.card?.card?.info;
   //console.log(name,cuisines,costForTwoMessage);

    const {itemCards} = (menudetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    //console.log(menudetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = 
     menudetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => 
         c.card?.["card"]?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
     console.log("Categories ", categories);

     return (
        <div className="text-center">
         <h1 className="font-bold my-6 text-2xl"> {name} </h1>
         <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
         </p>

      {/* Category Accordians */}
       {
         categories.map((category,index) => (
            //Controlled component
            <RestaurantCategory
               key = {category?.card?.card?.title}
               data = {category?.card?.card}
               showItems={index === showIndex ? true : false}
               setShowIndex = {() => setShowIndex(index)}
               showIndex = {showIndex}
               index = {index}
               dummy = {dummy}
            />
         ))
       }

       {/* <ul> */}
         {/* {itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                 {item.card?.info?.name} - {" "}
                 {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice /100}
                 </li>
         ))
         } */}

        {/* <li>{itemCards[0].card.info.name}</li> */}
        {/* <li>{itemCards[1].card.info.name}</li> */}
        {/* <li>{itemCards[2].card.info.name}</li> */}
       {/* </ul> */}

        </div>
    )
}

export default RestaurantMenu;