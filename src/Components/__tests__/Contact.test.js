
import Contact from "../Contact"
import {screen,render} from "@testing-library/react"
import "@testing-library/jest-dom"
//unit testing done here
describe("Contact Component test cases",()=>{
    test("should load contact us component",()=>{

        render(<Contact/>)
      //we will  rendered contact in jsdom
        const heading=screen.getByRole("heading");
        //it will rendered inside the screen
        //we will get the heading component
        expect(heading).toBeInTheDocument();
        //we will check if heading is in the document or not , basically it is inside screen or not
      })
      
      test("should load button inside contact component",()=>{
      
          render(<Contact/>)
        //we will  rendered contact in jsdom
          const button=screen.getByText("Submit");
          //it will rendered inside the screen
          //we will check if there text submit is in the document or not , basically it is inside screen or not
          expect(button).toBeInTheDocument();
          //we will check if button is in the document or not , basically it is inside screen or not
        })
      
        test("should load input inside the contact compoenet",()=>{
      
          render(<Contact/>)
        //we will  rendered contact in jsdom
          const inputName=screen.getByPlaceholderText("name");
          
          expect(inputName).toBeInTheDocument();
        
        })
      
        test("should load 2 inut boxes on the contact component",()=>{
        
          render(<Contact/>)
        //we will  rendered contact in jsdom
        const inputBoxes=screen.getAllByRole("textbox");
        //querying
        //we will get all the input boxes
        //our inputBoxes is jsx element or object or react fibre node or virtual dom object
        //assertion
      //for multiple items we use getAllByRole not getByRole if one item we use getByRole
        expect(inputBoxes.length).toBe(2);
        })
})
//there are 20 test cases 5 teset cases are testing contact page 5 test cases are testing something else so we can basically group them
