// Here we will write testcases for React code (Contact us page)
import Contact from "../Contact";
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"


 describe("Contact Us Page Test Case", () => {
    test("Should load contact us component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside Contact Component", ()=> {
          render(<Contact/>);
          const button = screen.getByRole("button");
          //Assertion
          expect(button).toBeInTheDocument();
    });
    
    test("Should load input box to enter name inside Contact Component", ()=> {
       render(<Contact/>);
       const inputName = screen.getByPlaceholderText("name");
       expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the Contact boxes", ()=> {
        render(<Contact/>);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        // console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });
 })

