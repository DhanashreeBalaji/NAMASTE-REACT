import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { act } from "@testing-library/react"
import { render,screen, fireEvent } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart"
import Header from "../Header"
import "@testing-library/jest-dom"
import MOCK_DATA_NAME from "../mocks/MockresMenu.json"

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
);

it("Should Load Restaurant Menu and Cart Component", async () => {
    await act (async () => 
      render(
        <BrowserRouter>
            <Provider store={appStore}>
          <Header/>
          <RestaurantMenu/>
          <Cart/>
            </Provider>
        </BrowserRouter>
      )
    );
//    Test codes
     const AccordianHeader = screen.getByText("Andhra Bowls (13)");
     fireEvent.click(AccordianHeader);

     expect(screen.getAllByTestId("foodItems").length).toBe(13);

     expect(screen.getByText("CART - 0 ITEMS")).toBeInTheDocument();

     const addBtn = screen.getAllByRole("button", {name: "Add +"});
     fireEvent.click(addBtn[0]);

     expect(screen.getByText("CART - 1 ITEMS")).toBeInTheDocument();

     fireEvent.click(addBtn[1]);

     expect(screen.getAllByTestId("foodItems").length).toBe(15);

     fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

     expect(screen.getAllByTestId("foodItems").length).toBe(13);

     expect(screen.getByText("Cart is e mpty. Add Items to the cart!")).toBeInTheDocument();


});