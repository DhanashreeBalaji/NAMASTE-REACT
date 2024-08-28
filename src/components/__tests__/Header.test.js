import { fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it("Should load Header component with a login button", () => {
   render(
    <BrowserRouter>
<Provider store={appStore}>
    <Header/>
 </Provider>
    </BrowserRouter>
 
   );

//    const loginButton = screen.getByRole("button");
//    expect(loginButton).toBeInTheDocument();

//   const loginButton = screen.getByText("Login");
//    expect(loginButton).toBeInTheDocument();

const loginButton = screen.getByRole("button", {name: "Login"});
expect(loginButton).toBeInTheDocument();
});

it("Should change Login button to logout on click", () => {
    render(
     <BrowserRouter>
         <Provider store={appStore} >
             <Header/>
         </Provider>
     </BrowserRouter>
    );
    const cartItems = screen.getByText("CART - 0 ITEMS");
    expect(cartItems).toBeInTheDocument();
 
 });

 it("Should change Login button to logout on click", () => {
    render(
     <BrowserRouter>
         <Provider store={appStore} >
             <Header/>
         </Provider>
     </BrowserRouter>
    );
   // To check if cart item is there or not. Pass Regex over there
const About = screen.getByText(/About/);
expect(About).toBeInTheDocument();
 
 });

it("Should change Login button to logout on click", () => {
   render(
    <BrowserRouter>
        <Provider store={appStore} >
            <Header/>
        </Provider>
    </BrowserRouter>
   );
   const loginbutton = screen.getByRole("button", {name:"Login"});
   fireEvent.click(loginbutton);
   const logoutbutton = screen.getByRole("button", {name: "Logout"});

   expect(logoutbutton).toBeInTheDocument();

});