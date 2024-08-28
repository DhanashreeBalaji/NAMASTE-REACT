import RestaurantCard from "../RestaurantCard"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"

test('should render RestaurantCard component with props Data', () => {

    // The RestaurantCard's single prop is an object. so give one hard coded object as prop to test
       render(<RestaurantCard resData = {MOCK_DATA} />)

       const name = screen.getByText("Chinese Wok");

       expect(name).toBeInTheDocument();
       
    });

//  it("Should render Restaurant Card Component with Promoted Label", () => {
//       render(<RestaurantCard resData = {MOCK_DATA} />)

//       const promoted = screen.getByText("Promoted");
//       expect(promoted).toBeInTheDocument();

//  });