import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { render,screen,fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import "@testing-library/jest-dom"

//  MOCK_DATA is the Hard coded data of API
// The fetch() in body component is not understood by jest-dom. So creating my own fetch functionality

 global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
 });

it("Should Search Restaurant cards List based on some text input", async () => {
    await act(async () => 
       render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
       )
    );
   
    // Test code (Write test case result based on hard coded api result for the fake fetch function)

      const cardsBeforeSearch = screen.getAllByTestId("resCard");
      expect(cardsBeforeSearch.length). toBe(8);      
      const searchbtn = screen.getByRole("button", {name: "Search"});
      const searchInput = screen.getByTestId("searchInput")
      fireEvent.change(searchInput, {target: {value: "Idly"}});

      fireEvent.click(searchbtn);

      const cardsAfterSearch = screen.getAllByTestId("resCard");
      expect(cardsAfterSearch.length).toBe(1);

});

it("Should filter Top Rated Restaurants", async () => {
    await act (async () => 
   render(
    <BrowserRouter>
    <Body/>
</BrowserRouter>
   )

    );
       const cardsBeforeFilter = screen.getAllByTestId("resCard");
       expect(cardsBeforeFilter.length).toBe(8);

       const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})
       fireEvent.click(topRatedBtn);

       const cardsAfterFilter = screen.getAllByTestId("resCard");
       expect(cardsAfterFilter.length).toBe(8);

});

