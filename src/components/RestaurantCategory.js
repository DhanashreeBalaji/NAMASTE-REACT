import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data, showItems, setShowIndex, showIndex, index, dummy}) => {

  //To make the Restaurant Category a uncontrolled component and remove the state and give the control to the parent
//  const [showItems, setShowItems] = useState(false);

//   const handleClick = () => {
//    setShowItems(!showItems);
//  };

const handleClick = () => {
 
   if(showIndex === index) {
    console.log(showIndex + ", "+ index)
   showItems = false
     console.log(showItems)
     return;
   }
 
  setShowIndex();
};
    
   return (
     <div> 
     <div className="mx-auto w-6/12 my-4 bg-gray-50 shadow-lg p-4" >
     {/* {Accordian Header} */}
    <div className="flex justify-between cursor-pointer my-3" 
    onClick={handleClick}>

    <span className="font-bold text-lg px-4">
      {data.title} ({data.itemCards.length})
     </span>
    <span className="px-4">⬇️</span>

   </div>

   {/* Accordian Body */}
    {
    showItems && <ItemList items= {data.itemCards} dummy={dummy}/>
     }
   

     </div>
      
     
     </div>
   );
};

export default RestaurantCategory