import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const[menudetails, setMenuDetails] = useState(null);

    useEffect( () => {
        fetchResMenuAPI();
    }, []);
    
      const fetchResMenuAPI = async () => {
          const data = await fetch (MENU_URL + resId);
          const json = await data.json();
        //   console.log(json)
          setMenuDetails(json.data);
      }; 
 
      return menudetails;

};
export default useRestaurantMenu;