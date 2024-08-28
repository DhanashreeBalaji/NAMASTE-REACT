import { useState, useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"

const Header = () => {

   // let btnName = "Login";  //Javascript variable
   const[btnName, setBtnName] = useState("Login")
   const onlineStatus = useOnlineStatus();

   // Accessing the context using the hook useContext
   const {loggedInUser, Country, City} = useContext(UserContext); 
  //  console.log(loggedInUser,City,Country)

    // TO SUBSCRIBE TO THE STORE but only subscribe to essential part of the store
    // Or else if you subscribe to the while store then it will be very inefficient
     const cartItems = useSelector((store) => store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2 mt-2 px-5 sm:bg-yellow-200 lg:bg-green-200">

        {/* logo */}
       <div className="logo-container">
        <img 
        className="w-56"
        src= {LOGO_URL} 
        />
       </div>
    
       {/* nav items */}
      <div className="nav-items flex items-center ">

      <ul className="flex p-4 m-4 ">
      <li className="px-4">  OnlineStatus: {onlineStatus ? "✅" : "❌"} </li>
      <li className="px-4"><Link to= "/grocery">Grocery</Link></li>
      <li className="px-4"><Link to= "/">Home</Link></li> 
       <li className="px-4"><Link to="/about">About</Link></li>
     <li className="px-4"><Link to="/contact">ContactUs</Link></li>  
     {/*  Near the cart symbol no: of items in cart slice is to be shown so for that
     Subscribe it to the store to access the data from the store */}
      <li className="px-4"><Link to="/cart">
         
          <div> CART - {cartItems.length} ITEMS</div>
       
      </Link></li> 
        <button className="login px-4"
        onClick={() => {
          // btnName = "Logout"  Javascript variable assignment does not reflect in UI
          btnName === "Login" ?
          setBtnName("Logout") : setBtnName("Login")
          console.log(btnName)
        }}
       
        >
           {btnName}  </button>

           <li className="px-4"> {loggedInUser} </li>
      </ul>
      </div>

        </div>
    )
}

export default Header;