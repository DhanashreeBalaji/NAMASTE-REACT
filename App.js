import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

// import Grocery from "./src/components/Grocery"

// ----------------------------------------------------------------

// const AppLayout = () => {
//     return(
//         <div className="app">
//           <Header/>
//           <Body/>
//         </div>
//     )
// }

// const appRouter = createBrowserRouter ([
//    {
//      path: "/",
//      element: <AppLayout/>,
//      errorElement: <Error/>,
//    },
//    {
//      path:"/about",
//      element: <About/>,
//      errorElement: <Error/>,
//    },
//    {
//     path: "/contact",
//     element: <Contact/>,
//     errorElement: <Error/>
//    }
// ]);

// -----------------------------------------------------------------------------

// Making Header display in all the Routes but the other part changes as per routes + Creating  Children Routes

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {

  // authentication (Context)
    const [userName, setUserName] = useState();
     useEffect(() => {
      const data = {
        naam : "Dhanashree",
      };
      setUserName(data.naam);
     },[]);


  return(
  
    // Providing the store details to our application so that our app knows from where to access the datas
    <Provider store = {appStore}>
         <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className="app">
    {/* <UserContext.Provider value={{loggedInUser : "Jumbu Uncle"}}> */}
      <Header/>
    {/* </UserContext.Provider> */}
        <Outlet/>
      </div>
    </UserContext.Provider>  
    </Provider>
   
  )
}

//Creating Child Routes and usage of Outlet
const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>,
        errorElement: <Error/>,
      },
      {
       path: "/contact",
       element: <Contact/>,
       errorElement: <Error/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback = {<h1>Loading....</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root") );
root.render( <RouterProvider router={appRouter} />);

// root.render(<AppLayout/>);  // Normal render
