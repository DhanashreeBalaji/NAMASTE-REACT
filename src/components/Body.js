import Shimmer from "./Shimmer";
import { useEffect, useState,useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Body = () => {
  
     
     const [listOfRes, setListofRes] = useState([]);
     const [searchText, setSearchText] = useState("");
     const [filteredList, setFilteredList] = useState([]);

     const {loggedInUser,setUserName} = useContext(UserContext);

     useEffect(() => {
     fetchData();
     }, []);

      const fetchData = async () => {       
      const data = await fetch (RES_URL);
      const json = await data.json();
      // console.log(json);
        // --------------------------- DESTRUCTURING FROM API DATA ------------------------------- //
       setListofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //  console.log(listOfRes);
       setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
   }

      const onlineStatus = useOnlineStatus();
      const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

       if(listOfRes.length === 0){
            return <Shimmer/>
        }

   if (onlineStatus === false)
   return(
     <h1>
      You are offline, Please turn your internet ON and try to reconnect......
     </h1>
   );
  
    return (
        <div className="body">

        <div className="flex gap-4 items-center">
         <div className="search m-2 p-2">

          <input
            type="text"
            data-testid = "searchInput"
           className="border-pink-500 bg-pink-200 border-dashed p-1 border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);  
            }}  />
            
          <button 
          className=" ml-2 bg-green-100 border-solid border-green-700 px-2 py-1 border rounded-lg"
          onClick={() => {
            //Search and filter logic
            const filteredList = listOfRes.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
            );

            setFilteredList(filteredList);
          }}
          >
          Search
          </button>
         </div>

<div className="m-4">
<button 
         className="px-4 py-2 bg-gray-100 border border-pink-200 rounded-lg"
         onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4
                );
              setFilteredList(filteredList);
           }} >
                       Top Rated Restaurants

           </button>
</div>
{/* Input for context updation */}
        <div>
        <label>UserName :</label>
        <input
        className=""
        value={loggedInUser}
        onChange = {(e) => setUserName(e.target.value)}
        />
        </div>
        </div>
          

           
           <div className="flex flex-wrap">        

        {/* Making the cards clickable */}
                 {
                    filteredList.map((restaurant) => (
                      <Link 
                      key = {restaurant?.info.id}
                      to = {"/restaurants/" + restaurant?.info.id } 
                      >    
                      {
                        restaurant.info.isOpen ? (
                          <RestaurantCardPromoted key ={restaurant?.info?.id}  resData={restaurant.info}/>
                        ) : (
                          <RestaurantCard  key ={restaurant?.info?.id}  resData={restaurant.info}/>
                        )
                      }

                       {/* <RestaurantCard key ={restaurant?.info?.id}  resData={restaurant}/> */}

                      </Link>
                       
                    ))

                 }

               </div>
        </div>
    );
}

export default Body;